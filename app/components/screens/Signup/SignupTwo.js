import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {View} from 'native-base';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import isEqual from "lodash/isEqual";

import * as appActions from "../../../redux/actions";
import CelButton from "../../atoms/CelButton/CelButton";
import CelCheckbox from "../../atoms/CelCheckbox/CelCheckbox";
import SimpleLayout from "../../layouts/SimpleLayout/SimpleLayout";
import apiUtil from "../../../utils/api-util";
import API from "../../../config/constants/API";

import {STYLES} from "../../../config/constants/style";
import Icon from "../../atoms/Icon/Icon";

import CelInput from "../../atoms/CelInput/CelInput";
import CelForm from "../../atoms/CelForm/CelForm";

const pageCalls = [API.UPDATE_USER, API.REGISTER_USER_FACEBOOK, API.REGISTER_USER_GOOGLE, API.REGISTER_USER_TWITTER]

@connect(
  state => ({
    screenIndex: state.nav.index,
    userLocation: state.users.userLocation,
    user: state.users.user,
    callsInProgress: state.api.callsInProgress,
    lastCompletedCall: state.api.lastCompletedCall,
    agreedToTermsOfUse: state.users.agreedToTermsOfUse,
    formData: state.ui.formData,
    formErrors: state.ui.formErrors,
  }),
  dispatch => ({ actions: bindActionCreators(appActions, dispatch) }),
)
class SignupTwo extends Component {
  componentDidMount() {
    const { user, actions } = this.props;

    actions.initForm({
      firstName: user && user.first_name ? user.first_name : undefined,
      email: user && user.email ? user.email : undefined,
      lastName: user && user.last_name ? user.last_name : undefined,
    })
  }

  // lifecycle methods
  componentWillReceiveProps(nextProps) {
    const { user, actions, lastCompletedCall } = this.props;

    if (pageCalls.indexOf(lastCompletedCall) === -1 && pageCalls.indexOf(nextProps.lastCompletedCall) !== -1) {
      actions.navigateTo('Home', true);
    }


    if (!isEqual(user, nextProps.user)) {
      actions.initForm({
        firstName: nextProps.user && nextProps.user.first_name ? nextProps.user.first_name : undefined,
        email: nextProps.user && nextProps.user.email ? nextProps.user.email : undefined,
        lastName: nextProps.user && nextProps.user.last_name ? nextProps.user.last_name : undefined,
      })
    }
  }

  // event hanlders
  onSubmit = () => {
    const { formData, user, actions } = this.props;

    const data = { ...formData};

    // register twitter user
    if (user && user.twitter_id) {
      return actions.registerUserTwitter({...user, ...data});
    }

    // register facebook user
    if (user && user.facebook_id) {
      return actions.registerUserFacebook({...user, ...data});
    }

    // register google user
    if (user && user.google_id) {
      return actions.registerUserGoogle({...user, ...data});
    }

    // update user
    if (user && !user.twitter_id && !user.facebook_id && !user.google_id) {
      return actions.updateUser(data);
    }
  }

  // rendering methods
  render() {
    const { formErrors, formData, user, callsInProgress, agreedToTermsOfUse, actions } = this.props;
    const { firstName, lastName, email } = formData;

    const isLoading = apiUtil.areCallsInProgress(pageCalls, callsInProgress);

    return (
      <SimpleLayout
        mainHeader={{ backButton: false }}
        animatedHeading={{ text: 'Just a few more details…' }}
        background={STYLES.PRIMARY_BLUE}
      >
        <View>
          <CelForm disabled={isLoading}>
            <CelInput
              error={formErrors.first_name}
              field="firstName"
              labelText="First Name"
              value={firstName}
              autoCapitalize={'sentences'}
            />
            <CelInput
              error={formErrors.last_name}
              field="lastName"
              labelText="Last Name"
              value={lastName}
              autoCapitalize={'sentences'}
            />
            {user && (user.facebook_id || user.google_id || user.twitter_id) ?
              <CelInput
                error={formErrors.email}
                field="email"
                labelText="Email"
                value={email}
              />
            : null}

            <View style={{ justifyContent: 'space-between', flexDirection:'row', alignItems: 'center', height: 36 }}>
              <CelCheckbox
                label="I agree to Terms of Use"
                value={agreedToTermsOfUse}
                onChange={actions.toggleTermsOfUse}
              />

              <View style={{ height: 36, marginTop: -15 }}>
                <TouchableOpacity onPress={() => actions.navigateTo('TermsOfUse')}>
                  <Icon name="QuestionMarkCircle" fill='#FFFFFF' heigh="24" width="24" viewBox="0 0 30 30" style={{ opacity: 0.5 }}/>
                </TouchableOpacity>
              </View>
            </View>
          </CelForm>

          <View style={{marginTop: 40, paddingBottom: 100}}>
            <CelButton
              disabled={!agreedToTermsOfUse || !formData.firstName || !formData.lastName || !formData.email}
              onPress={this.onSubmit}
              loading={ isLoading }
              white
              iconRight="IconArrowRight"
            >
              Create PIN
            </CelButton>
          </View>
        </View>
      </SimpleLayout>
    );
  }
}

export default SignupTwo;
