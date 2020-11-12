import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, TouchableOpacity } from "react-native";
import BigNumber from "bignumber.js";

import CoinSwitchStyle from "./CoinSwitch.styles";
import CelText from "../../atoms/CelText/CelText";
import formatter from "../../../utils/formatter";
import Icon from "../../atoms/Icon/Icon";
import {
  getColor,
  getScaledFont,
  getFontSize, widthPercentageToDP
} from "../../../utils/styles-util";
import { COLOR_KEYS } from "../../../constants/COLORS";
import * as appActions from "../../../redux/actions";
import AmountInput from "../../atoms/AmountInput/AmountInput";
import { KEYBOARD_TYPE } from "../../../constants/UI";

@connect(
  state => ({
    formData: state.forms.formData,
    walletSummary: state.wallet.summary,
    currencyRatesShort: state.currencies.currencyRatesShort,
  }),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) })
)

class CoinSwitch extends Component {
  static propTypes = {
    isUsd: PropTypes.bool,
    noUsdDecimals: PropTypes.bool,
    amountUsd: PropTypes.string,
    amountCrypto: PropTypes.string,
    updateFormFields: PropTypes.func.isRequired,
    onAmountPress: PropTypes.func,
    coin: PropTypes.string,
    amountColor: PropTypes.string,
    theme: PropTypes.string,
    coinRate: PropTypes.number
  }

  handleEnteringAmount = (amount) => {
    const {
      isUsd,
      actions,
      coinRate,
    } = this.props
    if (isUsd) {
      const amountCrypto  = amount && new BigNumber(amount).dividedBy(coinRate)
      actions.updateFormFields({
        "amountUsd": amount,
        "amountCrypto": amountCrypto.toString()
      })
    } else {
      const amountUsd  = amount &&  new BigNumber(amount).multipliedBy(coinRate)
      actions.updateFormFields({
        "amountCrypto": amount,
        "amountUsd": amountUsd.toString()
      })
    }
  }

  render() {
    const {
      coin,
      isUsd,
      amountUsd,
      amountCrypto,
      doubleTilde,
      actions,
    } = this.props;
    const upperValue = isUsd
      ? `${amountUsd || ""}`
      : amountCrypto || ""
    const lowerValue = !isUsd
      ? `${amountUsd || ""}`
      : `${amountCrypto || ""}`;

    const style = CoinSwitchStyle();
    return (
      <View style={style.container}>
        <View style={style.enterAmount}>
          {!isUsd ? (
            <Icon
              name={`Icon${coin}`}
              width="40"
              height="40"
              fill={COLOR_KEYS.HEADLINE}
              style={{ marginBottom: 28 }}
            />
          ) : (
            <View style={{
              width: 50,
            }}>
              <CelText type={"H2"} weight={"600"} margin={"0 0 28 0"}>USD</CelText>
            </View>

          )}
          <View>
            <View
              style={{
                height: getScaledFont(getFontSize("H1")),
                width: widthPercentageToDP("65%"),
                justifyContent: "center",
                marginVertical: 10,

              }}
            >
              <AmountInput
                value={upperValue}
                filed={isUsd ? "amountUsd" : "amountCrypto"}
                updateFormField={actions.updateFormField}
                onChange={this.handleEnteringAmount}
                keyboardType={KEYBOARD_TYPE.NUMERIC}
                placeholder="0.00"
                maxLength={18} // NOTE check with product
                style={[style.inputField, {
                  fontSize: upperValue.length < 12 ? 35 : 18,
                }]}
              />
            </View>
            <View
              style={{
                height: getScaledFont(getFontSize("H2")),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CelText
                align="center"
                type={lowerValue.length < 20 ? "H2" : "H5"}
                color={getColor(COLOR_KEYS.PARAGRAPH)}
              >
                {doubleTilde && "≈"} {isUsd ? formatter.crypto(lowerValue, coin) : formatter.fiat(lowerValue, "USD")}
              </CelText>

            </View>
          </View>


          <View style={style.switchButton}>
            <TouchableOpacity onPress={() => actions.updateFormField("isUsd", !isUsd)}>
              <Icon
                name="Switch"
                width="25"
                height="25"
                fill={COLOR_KEYS.HEADLINE}
              />
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  };
}

export default CoinSwitch;
