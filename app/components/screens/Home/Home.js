import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as appActions from "../../../redux/actions";
import mixpanelAnalytics from "../../../utils/mixpanel-analytics";
import { isKYCRejectedForever } from "../../../utils/user-util";
import API from "../../../constants/API";
import apiUtil from "../../../utils/api-util";
import SplashScreen from "../SplashScreen/SplashScreen";

@connect(
  state => ({
    user: state.user.profile,
    callsInProgress: state.api.callsInProgress,
    appSettings: state.user.appSettings,
    bannerProps: state.ui.bannerProps,
  }),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) })
)
class Home extends Component {
  static navigationOptions = () => ({
    header: null,
    gesturesEnabled: false,
  });

  async componentDidMount() {
    const { actions } = this.props;

    await actions.getUserAppBootstrap();

    mixpanelAnalytics.sessionStarted("Init app");
    await actions.setBannerProps();

    actions.claimAllBranchTransfers();

    const { user } = this.props;
    if (!user.has_pin) {
      return actions.resetToScreen("RegisterSetPin");
    }

    if (isKYCRejectedForever()) {
      return actions.resetToScreen("KYCFinalRejection");
    }

    if (user.has_pin) {
      const hasAlreadyVerified = apiUtil.wereSuccessfulInHistory(
        [API.CHECK_PIN, API.CHECK_TWO_FACTOR, API.SET_PIN],
        15
      );

      if (hasAlreadyVerified) {
        return this.goToWalletLanding();
      }

      return actions.resetToScreen("VerifyProfile", {
        hideBack: true,
        onSuccess: this.goToWalletLanding,
      });
    }
  }

  goToWalletLanding = () => {
    const { actions, bannerProps, appSettings } = this.props;

    if (appSettings && !appSettings.accepted_terms_of_use) {
      return actions.navigateTo("TermsOfUse", {
        purpose: "accept",
        nextScreen: "WalletLanding",
      });
    }

    actions.setBannerProps({
      sessionCount: bannerProps.sessionCount + 1,
    });
    actions.resetToScreen("WalletLanding");
    actions.handleDeepLink();
  };

  render = () => <SplashScreen />;
}

export default Home;
