// TODO(fj): check if we need appSettings anymore? *needed for permission decline check (blackout!)
// TODO(fj): map user with additional props

import ACTIONS from "../../constants/ACTIONS";

const initialState = {
  userLocation: undefined,
  // profile: undefined,
  profile: {
    profile_picture: null
  },
  expiredSession: false,
  kycStatus: undefined,
  kycDocuments: undefined,
  appSettings: {
    showWalletDetailsInfoBox: true,
    showWalletLandingInfoBox: true,
    showSecureTransactionsScreen: true,
    showTodayRatesModal: true,
    showBchExplanationInfoBox: true,
    declineAccess: false,
    theme: 'light'
  },
  compliance: {
    app: {
      allowed: true,
      coins: []
    },
    deposit: {
      allowed: true,
      coins: []
    },
    withdraw: {
      allowed: true,
      coins: []
    },
    celpay: {
      allowed: true,
      coins: []
    },
    loan: {
      allowed: true,
      coins: []
    },
    interest: {
      allowed: true,
      coins: []
    }
  },
  contacts: {
    friendsWithApp: [],
    friendsWithoutApp: []
  },
  bankAccountInfo: null,
  screen: undefined,
  loyaltyInfo: null,
  securityOverview: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.EXPIRE_SESSION:
      return {
        ...state,
        expiredSession: true,
      };
    case ACTIONS.LOGIN_USER_SUCCESS:
      return {
        ...state,
        tokens: action.tokens,
        profile: action.user,
      };

    case ACTIONS.REGISTER_USER_SUCCESS:
    case ACTIONS.REGISTER_USER_FACEBOOK_SUCCESS:
    case ACTIONS.REGISTER_USER_GOOGLE_SUCCESS:
    case ACTIONS.REGISTER_USER_TWITTER_SUCCESS:
    case ACTIONS.LOGIN_USER_GOOGLE_SUCCESS:
    case ACTIONS.LOGIN_USER_FACEBOOK_SUCCESS:
    case ACTIONS.LOGIN_USER_TWITTER_SUCCESS:
      return {
        ...state,
        profile: action.user,
      };

    case ACTIONS.TWITTER_GET_ACCESS_TOKEN:
      return {
        ...state,
        profile: {
          ...state.profile,
          twitter_oauth_token: action.twitter_tokens.oauth_token,
          twitter_oauth_secret: action.twitter_tokens.oauth_token_secret,
        },
      };

    case ACTIONS.GET_USER_PERSONAL_INFO_SUCCESS:
    case ACTIONS.UPDATE_USER_PERSONAL_INFO_SUCCESS:
    case ACTIONS.GET_USER_TAXPAYER_INFO_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.personalInfo,
          ...action.taxPayerInfo
        },
      };

    case ACTIONS.UPDATE_USER_ADDRESS_INFO_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.addressInfo,
        },
      };
    case ACTIONS.UPDATE_USER_TAXPAYER_INFO_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.taxpayerInfo,
        },
      };
    case ACTIONS.SET_PIN_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          has_pin: true,
        }
      }

    case ACTIONS.UPLOAD_PLOFILE_IMAGE_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          profile_picture: action.image
        },
      }

    case ACTIONS.START_KYC_SUCCESS:
    case ACTIONS.GET_KYC_STATUS_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          kyc: action.kyc,
        }
      }

    case ACTIONS.GET_KYC_DOCUMENTS_SUCCESS:
    case ACTIONS.CREATE_KYC_DOCUMENTS_SUCCESS:
      return {
        ...state,
        kycDocuments: action.documents,
      }

    case ACTIONS.GET_INDIVIDUAL_LINK_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          individual_referral_link: action.link
        }
      }

    case ACTIONS.GET_COMPLIANCE_INFO_SUCCESS:
      return {
        ...state,
        compliance: {
          ...action.complianceInfo
        }
      }

    case ACTIONS.GET_CONNECTED_CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: {
          friendsWithApp: [...action.contacts.friendsWithApp],
          friendsWithoutApp: [...action.contacts.friendsWithoutApp]
        }
      };

    case ACTIONS.GET_LINKED_BANK_ACCOUNT_SUCCESS:
      return {
        ...state,
        bankAccountInfo: {
          ...action.bankAccountInfo
        }
      }

    case ACTIONS.GET_PREVIOUS_SCREEN_SUCCESS:
      return {
        ...state,
        screen: action.screen
      };

    case ACTIONS.GET_LOYALTY_INFO_SUCCESS:
      return {
        ...state,
        loyaltyInfo: {
          ...action.loyaltyInfo
        }
      };

    case ACTIONS.SET_APP_SETTINGS_SUCCESS:
    case ACTIONS.GET_APP_SETTINGS_SUCCESS:
      return {
        ...state,
        appSettings: {
          ...state.appSettings,
          ...action.userAppData
        }
      }

    case ACTIONS.GET_MEMBER_STATUS_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          celsius_member: action.isNewMember || state.profile.celsius_member,
        }
      }

    case ACTIONS.DISABLE_TWO_FACTOR_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          two_factor_enabled: false,
        }
      }

    case ACTIONS.GET_USER_SECURITY_OVERVIEW_SUCCESS:
      return {
        ...state,
        securityOverview: {
          ...action.overview,
        }
      }

    default:
      return state;

  }
}
