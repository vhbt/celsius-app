import React, { Component } from "react";
import { Linking, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as appActions from "../../../redux/actions";
import RegularLayout from "../../layouts/RegularLayout/RegularLayout";
import IconButton from "../../organisms/IconButton/IconButton";
import CelSwitch from "../../atoms/CelSwitch/CelSwitch";
import { getColor } from "../../../utils/styles-util";
import { COLOR_KEYS } from "../../../constants/COLORS";
import CelText from "../../atoms/CelText/CelText";
import {
  BIOMETRIC_ERRORS,
  BIOMETRIC_TEXT,
  BIOMETRIC_TYPES,
} from "../../../constants/UI";
import {
  createBiometricsKey,
  deleteBiometricsKey,
} from "../../../utils/biometrics-util";
import { SCREENS } from "../../../constants/SCREENS";
import InfoBox from "../../atoms/InfoBox/InfoBox";
import Icon from "../../atoms/Icon/Icon";

@connect(
  state => ({
    securityOverview: state.security.securityOverview,
    user: state.user.profile,
    formData: state.forms.formData,
    biometrics: state.biometrics.biometrics,
    appState: state.app.appState,
  }),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) })
)
class BiometricAuthentication extends Component {
  static propTypes = {
    // text: PropTypes.string
  };
  static defaultProps = {};

  static navigationOptions = () => ({
    title: "Biometric authentication",
  });

  componentDidMount() {
    const { actions } = this.props;
    actions.getProfileInfo();
  }

  getBiometricsTextAndIcon = () => {
    const { biometrics } = this.props;
    const biometricsType = {
      text: "Biometric authentication",
      icon: "Fingerprint",
    };

    if (biometrics && biometrics.biometryType === BIOMETRIC_TYPES.FACE_ID) {
      biometricsType.icon = "FaceRecognition";
      biometricsType.text = BIOMETRIC_TEXT.FACE_ID;
    }
    if (biometrics && biometrics.biometryType === BIOMETRIC_TYPES.TOUCH_ID) {
      biometricsType.icon = "Fingerprint";
      biometricsType.text = BIOMETRIC_TEXT.TOUCH_ID;
    }
    return biometricsType;
  };

  rightSwitch = () => {
    const { user, biometrics } = this.props;
    const biometricsError = !!(
      biometrics && biometrics.error === BIOMETRIC_ERRORS.NONE_ENROLLED
    );
    return (
      <CelSwitch
        onValueChange={this.handleSwitchChangeBiometrics}
        value={user.biometrics_enabled}
        disabled={biometricsError}
      />
    );
  };

  handleSwitchChangeBiometrics = () => {
    const { actions, biometrics, user } = this.props;
    const biometricsType = this.getBiometricsTextAndIcon();
    const enableBiometricsText = `${biometricsType.text} enabled on this device.`;
    const disableBiometricsText = `${biometricsType.text} disabled on this device.`;

    if (!user.biometrics_enabled) {
      actions.navigateTo(SCREENS.VERIFY_PROFILE, {
        onSuccess: async () => {
          await createBiometricsKey(publicKey => {
            actions.activateBiometrics(publicKey, biometrics.biometryType);
          });
          actions.resetToScreen(SCREENS.BIOMETRICS_AUTHENTICATION);
          actions.showMessage("success", enableBiometricsText);
        },
        hideBiometrics: true,
      });
    } else {
      actions.navigateTo(SCREENS.VERIFY_PROFILE, {
        onSuccess: async () => {
          await deleteBiometricsKey(() => {
            actions.disableBiometrics();
          });
          actions.resetToScreen(SCREENS.BIOMETRICS_AUTHENTICATION);
          actions.showMessage("success", disableBiometricsText);
        },
        hideBiometrics: true,
      });
    }
  };

  render() {
    const { biometrics } = this.props;
    const biometricsError = !!(
      biometrics && biometrics.error === BIOMETRIC_ERRORS.NONE_ENROLLED
    );
    const Switcher = this.rightSwitch;
    const biometricsType = this.getBiometricsTextAndIcon();

    return (
      <RegularLayout>
        <CelText type="H4">
          Enable Biometric authentication which is available on this device.
        </CelText>
        {biometrics.available && (
          <IconButton
            margin={"20 0 20 0"}
            icon={biometricsType.icon}
            right={<Switcher />}
            hideIconRight
          >
            {biometricsType.text}
          </IconButton>
        )}

        {biometricsError && (
          <InfoBox
            backgroundColor={getColor(COLOR_KEYS.ALERT_STATE)}
            padding={"20 30 20 10"}
          >
            <View style={{ flexDirection: "row" }}>
              <View>
                <Icon
                  name={"WarningCircle"}
                  height="30"
                  width="30"
                  fill={getColor(COLOR_KEYS.WHITE)}
                />
              </View>
              <CelText type="H6" color={"white"} margin={"0 10 0 10"}>
                We notice that you haven't activated biometrics on your device.
                If you want to use biometrics in the app, you must activate
                biometrics on your device first.
              </CelText>
            </View>
          </InfoBox>
        )}

        <CelText align={"center"}>
          By enabling some of the biometrics options you agree with{" "}
          {
            <CelText
              color={getColor(COLOR_KEYS.LINK)}
              onPress={() => {
                Linking.openURL("https://celsius.network/terms-of-use/");
              }}
            >
              Terms and Conditions.
            </CelText>
          }
        </CelText>
      </RegularLayout>
    );
  }
}

export default BiometricAuthentication;
