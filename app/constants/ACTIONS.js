export default {
  // animations
  CHANGE_WALLET_HEADER_CONTENT: "CHANGE_WALLET_HEADER_CONTENT",
  CHANGE_COIN_DETAILS_HEADER_CONTENT: "CHANGE_COIN_DETAILS_HEADER_CONTENT",
  CHANGE_INTEREST_HEADER_CONTENT: "CHANGE_INTEREST_HEADER_CONTENT",
  SCROLL_Y_OFFSET: "SCROLL_Y_OFFSET",

  // api actions
  START_API_CALL: "START_API_CALL",
  API_ERROR: "API_ERROR",
  CLEAR_API_ERROR: "CLEAR_API_ERROR",

  // apy key actions
  CREATE_API_KEY_SUCCESS: "CREATE_API_KEY_SUCCESS",
  DELETE_API_KEY_SUCCESS: "DELETE_API_KEY_SUCCESS", // TODO refactor
  GET_API_KEYS_SUCCESS: "GET_API_KEYS_SUCCESS",

  // app actions
  APP_INIT_START: "APP_INIT_START",
  APP_INIT_DONE: "APP_INIT_DONE",
  RESET_APP: "RESET_APP",
  START_LOADING_ASSETS: "START_LOADING_ASSETS", // TODO check missing reducer
  FINISH_LOADING_ASSETS: "FINISH_LOADING_ASSETS",
  SET_INTERNET_CONNECTION: "SET_INTERNET_CONNECTION",
  SET_APP_STATE: "SET_APP_STATE",
  GET_INITIAL_CELSIUS_DATA_SUCCESS: "GET_INITIAL_CELSIUS_DATA_SUCCESS", // TODO check in generalDataReducer and loansReducer
  SET_GEOLOCATION: "SET_GEOLOCATION",
  SET_ADVERTISING_ID: "SET_ADVERTISING_ID",
  SET_DEVICE_APPSFLYER_UID: "SET_DEVICE_APPSFLYER_UID",

  // camera actions
  GET_CAMERA_ROLL_SUCCESS: "GET_CAMERA_ROLL_SUCCESS",
  ACTIVATE_CAMERA: "ACTIVATE_CAMERA",
  RETAKE_PHOTO: "RETAKE_PHOTO",
  FLIP_CAMERA: "FLIP_CAMERA",
  TAKE_CAMERA_PHOTO: "TAKE_CAMERA_PHOTO",

  // campaign actions
  BRANCH_LINK_REGISTERED: "BRANCH_LINK_REGISTERED",
  GET_INDIVIDUAL_LINK_SUCCESS: "GET_INDIVIDUAL_LINK_SUCCESS",
  GET_LINK_BY_URL_SUCCESS: "GET_LINK_BY_URL_SUCCESS",
  CHECK_PROFILE_PROMO_CODE_SUCCESS: "CHECK_PROFILE_PROMO_CODE_SUCCESS",
  SUBMIT_PROMO_CODE_SUCCESS: "SUBMIT_PROMO_CODE_SUCCESS",

  // community actions
  GET_COMMUNITY_STATISTICS_SUCCESS: "GET_COMMUNITY_STATISTICS_SUCCESS",

  // compliance reducer
  GET_COMPLIANCE_INFO_SUCCESS: "GET_COMPLIANCE_INFO_SUCCESS",

  // contact actions
  CONNECT_PHONE_CONTACTS_SUCCESS: "CONNECT_PHONE_CONTACTS_SUCCESS",
  GET_CONNECTED_CONTACTS_SUCCESS: "GET_CONNECTED_CONTACTS_SUCCESS",

  // currencies actions
  GET_CURRENCY_RATES_SUCCESS: "GET_CURRENCY_RATES_SUCCESS",
  GET_CURRENCY_GRAPHS_SUCCESS: "GET_CURRENCY_GRAPHS_SUCCESS",

  // forms actions
  UPDATE_FORM_FIELD: "UPDATE_FORM_FIELD",
  UPDATE_FORM_FIELDS: "UPDATE_FORM_FIELDS",
  INIT_FORM: "INIT_FORM",
  CLEAR_FORM: "CLEAR_FORM",
  SET_FORM_ERRORS: "SET_FORM_ERRORS",
  CLEAR_FORM_ERRORS: "CLEAR_FORM_ERRORS",
  SET_ACTIVE_FIELD: "SET_ACTIVE_FIELD",

  // general data actions
  GET_BACKEND_STATUS_SUCCESS: "GET_BACKEND_STATUS_SUCCESS",
  GET_LOAN_TERMS_OF_USE_SUCCESS: "GET_LOAN_TERMS_OF_USE_SUCCESS",

  // graph action
  GET_ACTIVE_TIMELINE: "GET_ACTIVE_TIMELINE",
  GET_WALLET_BALANCE_DATA_SUCCESS: "GET_WALLET_BALANCE_DATA_SUCCESS",
  GET_COIN_WALLET_BALANCE_DATA_SUCCESS: "GET_COIN_WALLET_BALANCE_DATA_SUCCESS",
  GET_INTEREST_GRAPH_DATA_SUCCESS: "GET_INTEREST_GRAPH_DATA_SUCCESS",
  GET_COIN_INTEREST_GRAPH_DATA_SUCCESS: "GET_COIN_INTEREST_GRAPH_DATA_SUCCESS",

  // hodl action
  GET_HODL_CODE_SUCCESS: "GET_HODL_CODE_SUCCESS",
  DEACTIVATE_HODL_MODE_SUCCESS: "DEACTIVATE_HODL_MODE_SUCCESS",
  ACTIVATE_HODL_MODE_SUCCESS: "ACTIVATE_HODL_MODE_SUCCESS",
  POLL_HODL_STATUS_SUCCESS: "POLL_HODL_STATUS_SUCCESS",

  // kyc actions
  CREATE_KYC_DOCUMENTS_SUCCESS: "CREATE_KYC_DOCUMENTS_SUCCESS",
  GET_KYC_DOCUMENTS_SUCCESS: "GET_KYC_DOCUMENTS_SUCCESS",
  START_KYC_SUCCESS: "START_KYC_SUCCESS",
  GET_KYC_STATUS_SUCCESS: "GET_KYC_STATUS_SUCCESS",
  SEND_VERIFICATION_SMS_SUCCESS: "SEND_VERIFICATION_SMS_SUCCESS",
  VERIFY_SMS_SUCCESS: "VERIFY_SMS_SUCCESS",
  GET_PRIMETRUST_TOU_LINK_SUCCESS: "GET_PRIMETRUST_TOU_LINK_SUCCESS",
  GET_UTILITY_BILL_SUCCESS: "GET_UTILITY_BILL_SUCCESS",
  GET_KYC_DOC_TYPES_SUCCESS: "GET_KYC_DOC_TYPES_SUCCESS",
  SET_UTILITY_BILL_SUCCESS: "SET_UTILITY_BILL_SUCCESS",

  // loan actions
  APPLY_FOR_LOAN_SUCCESS: "APPLY_FOR_LOAN_SUCCESS", // TODO missing reducer
  APPLY_FOR_LOAN_PREVIEW_DATA_SUCCESS: "APPLY_FOR_LOAN_PREVIEW_DATA_SUCCESS",
  GET_MARGIN_CALLS_SUCCESS: "GET_MARGIN_CALLS_SUCCESS",
  GET_ALL_LOANS_SUCCESS: "GET_ALL_LOANS_SUCCESS",
  GET_LOAN_SUCCESS: "GET_LOAN_SUCCESS",
  SET_ACTIVE_LOAN: "SET_ACTIVE_LOAN",
  LOCK_MARGIN_CALL_COLLATERAL_SUCCESS: "LOCK_MARGIN_CALL_COLLATERAL_SUCCESS", // TODO missing reducer
  GET_CONFIRM_LOAN_INFO_SUCCESS: "GET_CONFIRM_LOAN_INFO_SUCCESS",
  GET_LOAN_SETTINGS_SUCCESS: "GET_LOAN_SETTINGS_SUCCESS",
  UPDATE_LOAN_SETTINGS_SUCCESS: "UPDATE_LOAN_SETTINGS_SUCCESS",
  GET_AMORTIZATION_TABLE_SUCCESS: "GET_AMORTIZATION_TABLE_SUCCESS",
  PREPAY_LOAN_INTEREST_SUCCESS: "PREPAY_LOAN_INTEREST_SUCCESS", // TODO missing reducer
  PAY_LOAN_INTEREST_SUCCESS: "PAY_LOAN_INTEREST_SUCCESS", // TODO missing reducer
  PAY_LOAN_PRINCIPAL_SUCCESS: "PAY_LOAN_PRINCIPAL_SUCCESS", // TODO unused- remove?
  CHECK_LOAN_ALERTS: "CHECK_LOAN_ALERTS",

  // loyalty actions
  GET_LOYALTY_INFO_SUCCESS: "GET_LOYALTY_INFO_SUCCESS", // TODO also in generalDataReducer

  // navigation actions
  NAVIGATE: "Navigation/NAVIGATE",
  NAVIGATE_BACK: "Navigation/BACK",
  SET_ACTIVE_SCREEN: "SET_ACTIVE_SCREEN",
  GET_PREVIOUS_SCREEN_SUCCESS: "GET_PREVIOUS_SCREEN_SUCCESS",

  // simplex
  GET_QUOTE_SUCCESS: "GET_QUOTE_SUCCESS",
  GET_QUOTE_FOR_COIN_SUCCESS: "GET_QUOTE_FOR_COIN_SUCCESS",
  CREATE_PAYMENT_REQUEST_SUCCESS: "CREATE_PAYMENT_REQUEST_SUCCESS",
  GET_PAYMENT_REQUESTS_SUCCESS: "GET_PAYMENT_REQUESTS_SUCCESS",

  // transactions actions
  GET_ALL_TRANSACTIONS_SUCCESS: "GET_ALL_TRANSACTIONS_SUCCESS",
  GET_TRANSACTION_DETAILS_SUCCESS: "GET_TRANSACTION_DETAILS_SUCCESS",
  CANCEL_WITHDRAWAL_TRANSACTION_SUCCESS:
    "CANCEL_WITHDRAWAL_TRANSACTION_SUCCESS",
  WITHDRAW_CRYPTO_SUCCESS: "WITHDRAW_CRYPTO_SUCCESS",
  GET_CSV_EMAIL_SUCCESS: "GET_CSV_EMAIL_SUCCESS", // TODO no reducer

  // transfer actions
  GET_ALL_TRANSFERS_SUCCESS: "GET_ALL_TRANSFERS_SUCCESS",
  GET_TRANSFER_SUCCESS: "GET_TRANSFER_SUCCESS",
  CLAIM_TRANSFER_SUCCESS: "CLAIM_TRANSFER_SUCCESS",
  CANCEL_TRANSFER_SUCCESS: "CANCEL_TRANSFER_SUCCESS",
  CREATE_TRANSFER_SUCCESS: "CREATE_TRANSFER_SUCCESS",

  // ui actions
  SHOW_MESSAGE: "SHOW_MESSAGE",
  CLEAR_MESSAGE: "CLEAR_MESSAGE",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  OPEN_FAB_MENU: "OPEN_FAB_MENU",
  CLOSE_FAB_MENU: "CLOSE_FAB_MENU",
  SET_FAB_TYPE: "SET_FAB_TYPE",
  TOGGLE_KEYPAD: "TOGGLE_KEYPAD",
  ACTIVE_TAB: "ACTIVE_TAB",
  CLOSE_BANNER: "CLOSE_BANNER",
  SET_BANNER_PROPS: "SET_BANNER_PROPS",

  // user auth actions
  LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
  REGISTER_USER_SUCCESS: "REGISTER_USER_SUCCESS",
  SOCIAL_REGISTER_SUCCESS: "SOCIAL_REGISTER_SUCCESS",
  REGISTER_USER_FACEBOOK_SUCCESS: "REGISTER_USER_FACEBOOK_SUCCESS",
  REGISTER_USER_GOOGLE_SUCCESS: "REGISTER_USER_GOOGLE_SUCCESS",
  REGISTER_USER_TWITTER_SUCCESS: "REGISTER_USER_TWITTER_SUCCESS",
  LOGIN_USER_GOOGLE_SUCCESS: "LOGIN_USER_GOOGLE_SUCCESS",
  LOGIN_USER_FACEBOOK_SUCCESS: "LOGIN_USER_FACEBOOK_SUCCESS",
  LOGIN_USER_TWITTER_SUCCESS: "LOGIN_USER_TWITTER_SUCCESS",
  SEND_RESET_LINK_SUCCESS: "SEND_RESET_LINK_SUCCESS",
  RESET_PASSWORD_SUCCESS: "RESET_PASSWORD_SUCCESS",
  LOGOUT_USER: "LOGOUT_USER",
  EXPIRE_SESSION: "EXPIRE_SESSION",
  LOGOUT_FROM_ALL_DEVICES_SUCCESS: "LOGOUT_FROM_ALL_DEVICES_SUCCESS",
  CHANGE_PIN_SUCCESS: "CHANGE_PIN_SUCCESS",
  REFRESH_AUTH_TOKEN_SUCCESS: "REFRESH_AUTH_TOKEN_SUCCESS",

  // user actions
  GET_USER_PERSONAL_INFO_SUCCESS: "GET_USER_PERSONAL_INFO_SUCCESS",
  UPDATE_USER_PERSONAL_INFO_SUCCESS: "UPDATE_PERSONAL_USER_INFO_SUCCESS",
  GET_USER_TAXPAYER_INFO_SUCCESS: "GET_USER_TAXPAYER_INFO_SUCCESS",
  UPDATE_USER_ADDRESS_INFO_SUCCESS: "UPDATE_USER_ADDRESS_INFO_SUCCESS",
  UPDATE_USER_TAXPAYER_INFO_SUCCESS: "UPDATE_USER_TAXPAYER_INFO_SUCCESS",
  UPLOAD_PLOFILE_IMAGE_SUCCESS: "UPLOAD_PLOFILE_IMAGE_SUCCESS",
  GET_LINKED_BANK_ACCOUNT_SUCCESS: "GET_LINKED_BANK_ACCOUNT_SUCCESS",
  LINK_BANK_ACCOUNT_SUCCESS: "LINK_BANK_ACCOUNT_SUCCESS",
  GET_MEMBER_STATUS_SUCCESS: "GET_MEMBER_STATUS_SUCCESS",
  GET_APP_SETTINGS_SUCCESS: "GET_APP_SETTINGS_SUCCESS",
  SET_APP_SETTINGS_SUCCESS: "SET_APP_SETTINGS_SUCCESS",
  SET_PIN_SUCCESS: "SET_PIN_SUCCESS",
  SET_PIN: "SET_PIN_SUCCESS", // TODO refactor
  SET_HODL_PROPS: "SET_HODL_PROPS",

  // 3rd party user on-boarding
  TWITTER_GET_ACCESS_TOKEN: "TWITTER_GET_ACCESS_TOKEN",
  TWITTER_CLOSE: "TWITTER_CLOSE",
  TWITTER_OPEN: "TWITTER_OPEN",

  // user security actions
  CHECK_PIN_SUCCESS: "CHECK_PIN_SUCCESS",
  CHECK_TWO_FACTOR_SUCCESS: "CHECK_TWO_FACTOR_SUCCESS",
  DISABLE_TWO_FACTOR_SUCCESS: "DISABLE_TWO_FACTOR_SUCCESS",
  SHOW_VERIFY_SCREEN: "SHOW_VERIFY_SCREEN",
  GET_USER_SECURITY_OVERVIEW_SUCCESS: "GET_USER_SECURITY_OVERVIEW_SUCCESS",

  // wallet actions
  GET_WALLET_SUMMARY_SUCCESS: "GET_WALLET_SUMMARY_SUCCESS",
  GET_COIN_ADDRESS_SUCCESS: "GET_COIN_ADDRESS_SUCCESS",
  SET_COIN_WITHDRAWAL_ADDRESS_SUCCESS: "SET_COIN_WITHDRAWAL_ADDRESS_SUCCESS",
  SET_COIN_WITHDRAWAL_ADDRESS_LABEL_SUCCESS:
    "SET_COIN_WITHDRAWAL_ADDRESS_LABEL_SUCCESS",
  SET_COIN_WITHDRAWAL_ADDRESS_LABELS: "SET_COIN_WITHDRAWAL_ADDRESS_LABELS",
  GET_ALL_COIN_WITHDRAWAL_ADDRESSES_SUCCESS:
    "GET_ALL_COIN_WITHDRAWAL_ADDRESSES_SUCCESS",
  GET_COINS_WITHOUT_WITHDRAWAL_ADDRESS: "GET_COINS_WITHOUT_WITHDRAWAL_ADDRESS",
  // interest actions
  GET_INTEREST_CHART_DATA_SUCCESS: "GET_INTEREST_CHART_DATA_SUCCESS", // TODO unused- remove?
};
