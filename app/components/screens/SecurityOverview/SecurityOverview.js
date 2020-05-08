import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";
import moment from "moment";
import STYLES from "../../../constants/STYLES";
import * as appActions from "../../../redux/actions";
import RegularLayout from "../../layouts/RegularLayout/RegularLayout";
import Separator from "../../atoms/Separator/Separator";
import ToggleInfoCard from "../../molecules/ToggleInfoCard/ToggleInfoCard";
import SecurityScoreGauge from "../../atoms/SecurityScoreGauge/SecurityScoreGauge";
import SecurityStrengthMeter from "../../atoms/SecurityStrengthMeter/SecurityStrengthMeter";
import CelText from "../../atoms/CelText/CelText";
import SecurityOverviewStyle from "./SecurityOverview.styles";
import Card from "../../atoms/Card/Card";
import { getTheme } from "../../../utils/styles-util";
import Icon from "../../atoms/Icon/Icon";
import { SECURITY_STRENGTH_LEVEL } from "../../../constants/DATA";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import SeparatorInfoModal from "../../modals/SeparatorInfoModal/SeparatorInfoModal";
import { MODALS } from "../../../constants/UI";

@connect(
  state => ({
    withdrawalAddresses: state.wallet.withdrawalAddresses,
    securityOverview: state.security.securityOverview,
    is2FAEnabled: state.user.profile.two_factor_enabled,
    hodlStatus: state.hodl.hodlStatus,
  }),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) })
)
class SecurityOverview extends Component {
  state = {
    selectedModalData: {
      title: "",
      body: [],
    },
  };

  static propTypes = {
    iconName: PropTypes.string,
  };
  static defaultProps = {
    iconName: "",
  };

  static navigationOptions = () => ({
    title: "Security Overview",
    right: "profile",
  });

  componentDidMount() {
    const { actions } = this.props;
    actions.getSecurityOverview();
  }

  onPress2fa = () => {
    const { actions, is2FAEnabled } = this.props;
    if (!is2FAEnabled) {
      actions.navigateTo("VerifyProfile", {
        onSuccess: () => actions.navigateTo("TwoFactorSettings"),
      });
    }
  };

  handleModalData = type => {
    switch (type) {
      case "hodl":
        this.setState({
          selectedModalData: {
            title: "What is HODL Mode?",
            body: [
              "HODL Mode is a security feature that gives you the ability to temporarily disable outgoing transactions from your Celsius account. You control when HODL Mode is activated, and it is an ideal feature for those that do not plan on withdrawing or transferring funds from their wallet for an extended period of time.",
            ],
          },
        });
        return;
      case "withdrawalAddresses":
        this.setState({
          selectedModalData: {
            title: "Why should you whitelist your withdrawal addresses?",
            body: [
              "Whitelisting a withdrawal address means that in the rare chance a hacker is able to gain access to your account, the only place they can send your crypto is a wallet that you already control. In addition, changing a whitelisted address for a specific coin requires email confirmation and will incur a 24-hour lockdown on all withdrawals in that coin.",
            ],
          },
        });
        return;
      case "twoFA":
        this.setState({
          selectedModalData: {
            title: "What is 2FA?",
            body: [
              "Two-factor authentication (2FA) is the industry standard for securing online accounts. Once activated, 2FA adds a second layer of protection between a hacker and withdrawal confirmations, CelPay confirmations, logins, and other sensitive actions by using a Time-based One-time Password.",
              "You can set up 2FA on your account by using Google Authenticator or Authy app, available on Android and iOS mobile devices.",
            ],
          },
        });
        return;
      default:
        return;
    }
  };

  renderWhitelistedAddressesCard = () => {
    const style = SecurityOverviewStyle();
    const theme = getTheme();
    const { actions, securityOverview } = this.props;

    if (_.isEmpty(securityOverview)) return;

    if (
      securityOverview.withdrawal_addresses_whitelisted_count ===
      securityOverview.withdrawal_addresses_count
    ) {
      return (
        <ToggleInfoCard
          enabled
          titleText={`${securityOverview.withdrawal_addresses_whitelisted_count}/${securityOverview.withdrawal_addresses_count}`}
          subtitle={"You added all withdrawal addresses"}
        />
      );
    }
    return (
      <Card margin="20 0 20 0" padding={"2 2 2 2"} styles={style.card}>
        <View style={{ justifyContent: "center" }}>
          <View
            style={[
              style.circle,
              {
                backgroundColor:
                  theme === "light"
                    ? STYLES.COLORS.DARK_GRAY1
                    : STYLES.COLORS.WHITE_OPACITY1,
              },
            ]}
          >
            <Icon
              name={"Shield"}
              fill={STYLES.COLORS.CELSIUS_BLUE}
              width={35}
              height={35}
            />
          </View>
        </View>

        <View style={style.infoTextWrapper}>
          <View style={style.infoSubtitleWrapper}>
            <CelText type="H2" weight="600">
              {securityOverview.withdrawal_addresses_whitelisted_count}
            </CelText>
            <CelText type="H4" margin="0 0 2 0">
              /{securityOverview.withdrawal_addresses_count}
            </CelText>
          </View>
          <CelText
            type="H6"
            weight={"600"}
            color={STYLES.COLORS.CELSIUS_BLUE}
            onPress={() => {
              actions.navigateTo("WithdrawAddressOverview");
            }}
          >
            Check Withdrawal Addresses
          </CelText>
        </View>
      </Card>
    );
  };

  render() {
    const { is2FAEnabled, actions, securityOverview } = this.props;
    if (_.isEmpty(securityOverview)) return <LoadingScreen />;

    return (
      <RegularLayout>
        <View style={{ flex: 1 }}>
          <SecurityScoreGauge level={securityOverview.overall_score_strength} />
          <TouchableOpacity
            onPress={() => {
              this.handleModalData("twoFA");
              actions.openModal(MODALS.SEPARATOR_INFO_MODAL);
            }}
          >
            <Separator text="2FA VERIFICATION" showInfo />
          </TouchableOpacity>
          <ToggleInfoCard
            subtitle={"Your 2FA verification is"}
            onPress={this.onPress2fa}
            enabled={is2FAEnabled}
          />

          <>
            <TouchableOpacity
              onPress={() => {
                this.handleModalData("withdrawalAddresses");
                actions.openModal(MODALS.SEPARATOR_INFO_MODAL);
              }}
            >
              <Separator text="WHITELISTED WITH. ADDRESSES" showInfo />
            </TouchableOpacity>
            {this.renderWhitelistedAddressesCard()}
          </>

          <TouchableOpacity
            onPress={() => {
              this.handleModalData("hodl");
              actions.openModal(MODALS.SEPARATOR_INFO_MODAL);
            }}
          >
            <Separator text="HODL MODE" showInfo />
          </TouchableOpacity>
          <ToggleInfoCard
            subtitle={"HODL mode is"}
            onPress={() => actions.navigateTo("HodlLanding")}
            enabled={securityOverview.hodl_mode_active}
          />

          {securityOverview.is_using_password_auth && (
            <>
              <Separator text="PASSWORD" />
              <SecurityStrengthMeter
                level={securityOverview.password_strength}
                lastChangePeriod={moment(
                  securityOverview.password_last_change
                ).fromNow()}
                enhanceText={
                  securityOverview.password_strength !==
                    SECURITY_STRENGTH_LEVEL.STRONG.toLowerCase() &&
                  "Change Password"
                }
                onPressEnhance={() => {
                  actions.navigateTo("ChangePassword");
                }}
              />
            </>
          )}

          {!is2FAEnabled && (
            <>
              <Separator text="PIN" />
              <SecurityStrengthMeter
                level={securityOverview.pin_strength}
                lastChangePeriod={moment(
                  securityOverview.pin_last_change
                ).fromNow()}
                enhanceText={
                  securityOverview.pin_strength !==
                    SECURITY_STRENGTH_LEVEL.STRONG.toLowerCase() && "Change PIN"
                }
                onPressEnhance={() => {
                  actions.navigateTo("VerifyProfile", {
                    onSuccess: () => actions.navigateTo("ChangePin"),
                  });
                }}
              />
            </>
          )}
          <SeparatorInfoModal
            actions={actions}
            data={this.state.selectedModalData}
          />
        </View>
      </RegularLayout>
    );
  }
}

export default SecurityOverview;
