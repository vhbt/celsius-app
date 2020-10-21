import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
// import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as appActions from "../../../redux/actions";
// import ExtendLoanScreenStyle from "./ExtendLoanScreen.styles";
import CelText from "../../atoms/CelText/CelText";
import RegularLayout from "../../layouts/RegularLayout/RegularLayout";
import CelButton from "../../atoms/CelButton/CelButton";
import formatter from "../../../utils/formatter";
import { COLOR_KEYS } from "../../../constants/COLORS";
import PredefinedAmounts from "../../organisms/PredefinedAmounts/PredefinedAmounts";
import CircleButton from "../../atoms/CircleButton/CircleButton";
import Separator from "../../atoms/Separator/Separator";
import Card from "../../atoms/Card/Card";
import CelNumpad from "../../molecules/CelNumpad/CelNumpad";
import { KEYPAD_PURPOSES } from "../../../constants/UI";

let timeout;

@connect(
  state => ({
    formData: state.forms.formData,
    currencyRates: state.currencies.currencyRatesShort,
    allLoans: state.loans.allLoans,
  }),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) })
)
class ExtendLoanScreen extends Component {
  static propTypes = {};
  static defaultProps = {};

  static navigationOptions = () => ({
    title: "Extend Loan",
    right: "profile",
  });

  constructor(props) {
    super(props);
    props.actions.updateFormField("extendPeriod", "1");

    this.state = {
      activePeriod: {
        label: `6 months`, value: "6"
      },
      months: 6
    }
  }

  handleAmountChange = (newValue) => {
    const { actions } = this.props;
    let value;
    if (timeout) clearTimeout(timeout);
    if (Number(newValue) < 6) {
      timeout = setTimeout(() => {
        actions.showMessage(
          "warning",
          `6 months is currently the minimum extendable period. Please adjust your extend period to proceed.`
        );
      }, 5000);
    }

    if (Number(newValue) > 36) {

      timeout = setTimeout(() => {
        actions.showMessage(
          "warning",
          `36 months is currently the maximum extendable period. Please adjust your extend period to proceed.`
        );
      }, 5000);
      return
    }

    if(newValue === "") {
      value = 6
    } else {
      value = newValue
    }

    actions.updateFormField("extendPeriod", value);
    this.setState({ months: Number(value) });
  };

  calculateAdditionalInterest = (usdValue, coinRate, coin) => {
    const rate = coin === "USD" ? 1 : coinRate;
    return formatter.crypto(usdValue / rate, coin, {precision: 2});
  };

  decrement = () => {
    const { months } = this.state;
    if (months === 6 ) return
    this.setState({
      months: months - 1
    })
  };

  increment = () => {
    const { months } = this.state;
    if (months === 36 ) return
    this.setState({
      months: months + 1
    })
  };

  onPressPredefinedAmount = ({ label, value }) => {
     if (value === "6") {
      this.setState({
        months: 6,
        activePeriod: {
          label, value
        }
      })
    }
    if (value === "36") {
      this.setState({
        months: 36,
        activePeriod: {
          label, value
        },
      })
    }
  };

  handleConfirmation = () => {
  const { actions } = this.props;
  const { months } = this.state;
  // navigateTo
    actions.updateFormField("extendPeriod", `${months}`)
  }


  render() {
    const {
      actions,
      allLoans,
      currencyRates,
      navigation,
      formData
    } = this.props;
    const { activePeriod, months } = this.state;
    // const style = ExtendLoanScreenStyle();

    const predefinedAmount = [
      { label: `6 months`, value: "6" },
      { label: `36 months`, value: "36" },
    ];

    const loanId = navigation.getParam("id");
    const loan = allLoans.find(l => l.id === loanId);
    const coinRate = currencyRates[loan.coin_loan_asset.toLowerCase()];

    const additionalInterest = this.calculateAdditionalInterest(Number(loan.monthly_payment * months), coinRate, loan.coin_loan_asset)

    return (
      <RegularLayout>
        <View style={{ justifyContent: "space-around", alignItems: "center" }}>
          <View>
            <CelText align={"center"} weight={"300"}>
              How long would you like to extend loan
            </CelText>
            <PredefinedAmounts
              data={predefinedAmount}
              onSelect={this.onPressPredefinedAmount}
              activePeriod={activePeriod}
            />
          </View>

          <View style={{marginVertical: 30, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <CircleButton
                icon={"Minus2"}
                size={30}
                onPress={() => this.decrement()}
              />
              <View style={{alignItems: "center"}}>
                <TouchableOpacity onPress={actions.toggleKeypad}>
                <CelText margin={"0 20 0 20"} weight={"600"} type={"H1"}>
                  {months || " "}
                </CelText>
                </TouchableOpacity>
                <CelText margin={"0 20 0 20"} weight={"200"} type={"H3"}>
                  {"months"}
                </CelText>
              </View>
            <CircleButton
              icon={"Plus"}
              size={30}
              onPress={() => this.increment()}
            />
          </View>
          <View>
            <Card size={"twoThirds"} color={COLOR_KEYS.BACKGROUND}>
              <CelText type={"H6"}>{`Additional interest: ${formatter.crypto(loan.monthly_payment, loan.coin_loan_asset, {precision: 2})}`}</CelText>
              <Separator margin={"10 0 10 0"}/>
              <CelText type={"H6"}>{`New monthly interest:`}</CelText>
              <Separator margin={"10 0 10 0"}/>
              <CelText type={"H6"}>{`Total interest : ${additionalInterest}`}</CelText>
            </Card>

          </View>

          <View>
            <CelButton
              onPress={() => this.handleConfirmation()}
              margin={"30 0 0 0"}
              iconRight={"IconArrowRight"}
              iconRightWidth={20}
            >
              Confirm
            </CelButton>
          </View>
          <CelNumpad
            autofocus={false}
            toggleKeypad={actions.toggleKeypad}
            field={"extendPeriod"}
            value={formData.extendPeriod || ""}
            updateFormField={actions.updateFormField}
            setKeypadInput={actions.setKeypadInput}
            onPress={this.handleAmountChange}
            purpose={KEYPAD_PURPOSES.BORROW}
          />
        </View>

      </RegularLayout>
    );
  }
}

export default ExtendLoanScreen;
