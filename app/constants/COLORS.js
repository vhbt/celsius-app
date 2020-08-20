import { THEMES } from "./UI";

const COLORS = {
  WHITE: "#FFFFFF",
  BLACK: "#000000",
  TRANSPARENT: "transparent",
  WHITE_OVERLAY: "rgba(255, 255, 255,.8)",
  PASTEL_GREEN: "#4FB895",
  PASTEL_RED: "#F46B6B",
  RED: "#EF461A",
  PASTEL_ORANGE: "#FA9064",
  YELLOW: "#f0a533",
  PASTEL_YELLOW: "#e19f30",
  CELSIUS_BLUE_LIGHTER: "#4156a6",
  CELSIUS_BLUE_MEDIUM: "#5264ef",
  CELSIUS_BLUE_DARK: "#232A65",
  PASTEL_BLUE_LIGHT: "#9199D3",
  PASTEL_BLUE_DARK: "#5E67B0",
  LIGHT_GRAY: "#E0E1E2",
  EXTRA_LIGHT_GRAY: "#F3F3F3",
  DARK_BLUE: "#22222d",
  DARK: "#0E0E0E",
  DARK_OVERLAY: "rgba(0,0,0,0.8)",
  SOFT_SUNSET: "#FBF6EF",
  GRAY: "#868686",
  MEDIUM_GRAY: "#C2C2C6",
  DARK_GRAY: "#333b43",
};

export const COLOR_KEYS = {
  HEADER: "header",
  BACKGROUND: "background",
  CARDS: "cards",
  MODAL_OVERLAY: "modal_overlay",
  MAIN_MENU_OVERLAY: "main_menu_overlay",
  BANNER_INFO: "banner_info",
  SEPARATORS: "separators",
  PRIMARY_BUTTON: "primary_button",
  PRIMARY_BUTTON_FOREGROUND: "primary_button_foreground",
  LINK: "link",
  TAB_SELECTED: "tab_selected",
  TAB_UNSELECTED: "tab_unselected",
  HEADLINE: "headline",
  SECTION_TITLE: "section_title",
  PARAGRAPH: "paragraph",
  FAIR: "fair",
  POSITIVE_STATE: "positive_state",
  ALERT_STATE: "alert_state",
  NEGATIVE_STATE: "negative_state",
  TOGGLE_OFF_FOREGROUND: "toggle_off_foreground",
  TOGGLE_OFF_BACKGROUND: "toggle_off_background",
  TOGGLE_ON_FOREGROUND: "toggle_on_foreground",
  TOGGLE_ON_BACKGROUND: "toggle_on_background",
  DOT_INDICATOR_ACTIVE: "dot_indicator_active",
  DOT_INDICATOR_INACTIVE: "dot_indicator_inactive",
  CIRCLE_ICON_FOREGROUND: "circle_icon_foreground",
  CIRCLE_ICON_BACKGROUND: "circle_icon_background",
  INPUT_ICON: "input_icon",
  TRANSPARENT: "transparent",
  BLACK: "black",
  WHITE: "white",
  CAMERA_OVERLAY: "camera_overlay",
  TOOLTIP: "tooltip",
};

export const COLOR_FAMILY = {
  [THEMES.LIGHT]: {
    [COLOR_KEYS.HEADER]: COLORS.WHITE,
    [COLOR_KEYS.BACKGROUND]: COLORS.EXTRA_LIGHT_GRAY,
    [COLOR_KEYS.CARDS]: COLORS.WHITE,
    [COLOR_KEYS.MODAL_OVERLAY]: COLORS.DARK_GRAY,
    [COLOR_KEYS.MAIN_MENU_OVERLAY]: COLORS.WHITE_OVERLAY,
    [COLOR_KEYS.BANNER_INFO]: COLORS.CELSIUS_BLUE_LIGHTER,
    [COLOR_KEYS.SEPARATORS]: COLORS.LIGHT_GRAY,
    [COLOR_KEYS.PRIMARY_BUTTON]: COLORS.CELSIUS_BLUE_LIGHTER,
    [COLOR_KEYS.PRIMARY_BUTTON_FOREGROUND]: COLORS.WHITE,
    [COLOR_KEYS.LINK]: COLORS.CELSIUS_BLUE_LIGHTER,
    [COLOR_KEYS.TAB_SELECTED]: COLORS.CELSIUS_BLUE_LIGHTER,
    [COLOR_KEYS.TAB_UNSELECTED]: COLORS.GRAY,
    [COLOR_KEYS.HEADLINE]: COLORS.DARK_GRAY,
    [COLOR_KEYS.SECTION_TITLE]: COLORS.GRAY,
    [COLOR_KEYS.PARAGRAPH]: COLORS.GRAY,
    [COLOR_KEYS.FAIR]: COLORS.PASTEL_ORANGE,
    [COLOR_KEYS.POSITIVE_STATE]: COLORS.PASTEL_GREEN,
    [COLOR_KEYS.ALERT_STATE]: COLORS.PASTEL_YELLOW,
    [COLOR_KEYS.NEGATIVE_STATE]: COLORS.RED,
    [COLOR_KEYS.TOGGLE_OFF_FOREGROUND]: COLORS.WHITE,
    [COLOR_KEYS.TOGGLE_OFF_BACKGROUND]: COLORS.LIGHT_GRAY,
    [COLOR_KEYS.TOGGLE_ON_FOREGROUND]: COLORS.WHITE,
    [COLOR_KEYS.TOGGLE_ON_BACKGROUND]: COLORS.WHITE,
    [COLOR_KEYS.DOT_INDICATOR_ACTIVE]: COLORS.GRAY,
    [COLOR_KEYS.DOT_INDICATOR_INACTIVE]: COLORS.LIGHT_GRAY,
    [COLOR_KEYS.CIRCLE_ICON_FOREGROUND]: COLORS.LIGHT_GRAY,
    [COLOR_KEYS.CIRCLE_ICON_BACKGROUND]: COLORS.WHITE,
    [COLOR_KEYS.CAMERA_OVERLAY]: COLORS.WHITE_OVERLAY,
    [COLOR_KEYS.TRANSPARENT]: COLORS.TRANSPARENT,
    [COLOR_KEYS.WHITE]: COLORS.WHITE,
    [COLOR_KEYS.BLACK]: COLORS.BLACK,
    [COLOR_KEYS.TOOLTIP]: COLORS.DARK_GRAY,
  },

  [THEMES.DARK]: {
    [COLOR_KEYS.HEADER]: COLORS.DARK_BLUE,
    [COLOR_KEYS.BACKGROUND]: COLORS.DARK,
    [COLOR_KEYS.CARDS]: COLORS.DARK_BLUE,
    [COLOR_KEYS.MODAL_OVERLAY]: COLORS.DARK_BLUE,
    [COLOR_KEYS.MAIN_MENU_OVERLAY]: COLORS.DARK_OVERLAY,
    [COLOR_KEYS.BANNER_INFO]: COLORS.CELSIUS_BLUE_MEDIUM,
    [COLOR_KEYS.SEPARATORS]: COLORS.DARK_GRAY,
    [COLOR_KEYS.PRIMARY_BUTTON]: COLORS.CELSIUS_BLUE_MEDIUM,
    [COLOR_KEYS.PRIMARY_BUTTON_FOREGROUND]: COLORS.WHITE,
    [COLOR_KEYS.LINK]: COLORS.CELSIUS_BLUE_MEDIUM,
    [COLOR_KEYS.TAB_SELECTED]: COLORS.CELSIUS_BLUE_MEDIUM,
    [COLOR_KEYS.TAB_UNSELECTED]: COLORS.GRAY,
    [COLOR_KEYS.HEADLINE]: COLORS.WHITE,
    [COLOR_KEYS.SECTION_TITLE]: COLORS.GRAY,
    [COLOR_KEYS.PARAGRAPH]: COLORS.MEDIUM_GRAY,
    [COLOR_KEYS.FAIR]: COLORS.PASTEL_ORANGE,
    [COLOR_KEYS.POSITIVE_STATE]: COLORS.PASTEL_GREEN,
    [COLOR_KEYS.ALERT_STATE]: COLORS.PASTEL_YELLOW,
    [COLOR_KEYS.NEGATIVE_STATE]: COLORS.RED,
    [COLOR_KEYS.TOGGLE_OFF_FOREGROUND]: COLORS.MEDIUM_GRAY,
    [COLOR_KEYS.TOGGLE_OFF_BACKGROUND]: COLORS.MEDIUM_GRAY,
    [COLOR_KEYS.TOGGLE_ON_FOREGROUND]: COLORS.MEDIUM_GRAY,
    [COLOR_KEYS.TOGGLE_ON_BACKGROUND]: COLORS.MEDIUM_GRAY,
    [COLOR_KEYS.DOT_INDICATOR_ACTIVE]: COLORS.MEDIUM_GRAY,
    [COLOR_KEYS.DOT_INDICATOR_INACTIVE]: COLORS.GRAY,
    [COLOR_KEYS.CIRCLE_ICON_FOREGROUND]: COLORS.DARK_GRAY,
    [COLOR_KEYS.CIRCLE_ICON_BACKGROUND]: COLORS.DARK_BLUE,
    [COLOR_KEYS.CAMERA_OVERLAY]: COLORS.DARK_OVERLAY,
    [COLOR_KEYS.TRANSPARENT]: COLORS.TRANSPARENT,
    [COLOR_KEYS.WHITE]: COLORS.WHITE,
    [COLOR_KEYS.BLACK]: COLORS.BLACK,
    [COLOR_KEYS.TOOLTIP]: COLORS.GRAY,
  },

  [THEMES.UNICORN]: {
    [COLOR_KEYS.HEADER]: COLORS.SOFT_SUNSET,
    [COLOR_KEYS.BACKGROUND]: COLORS.SOFT_SUNSET,
    [COLOR_KEYS.CARDS]: COLORS.WHITE,
    [COLOR_KEYS.MODAL_OVERLAY]: COLORS.WHITE_OVERLAY,
    [COLOR_KEYS.MAIN_MENU_OVERLAY]: COLORS.WHITE,
    [COLOR_KEYS.BANNER_INFO]: COLORS.CELSIUS_BLUE_DARK,
    [COLOR_KEYS.SEPARATORS]: COLORS.LIGHT_GRAY,
    [COLOR_KEYS.PRIMARY_BUTTON]: COLORS.CELSIUS_BLUE_DARK,
    [COLOR_KEYS.PRIMARY_BUTTON_FOREGROUND]: COLORS.WHITE,
    [COLOR_KEYS.LINK]: COLORS.CELSIUS_BLUE_DARK,
    [COLOR_KEYS.TAB_SELECTED]: COLORS.CELSIUS_BLUE_DARK,
    [COLOR_KEYS.TAB_UNSELECTED]: COLORS.PASTEL_BLUE_LIGHT,
    [COLOR_KEYS.HEADLINE]: COLORS.CELSIUS_BLUE_DARK,
    [COLOR_KEYS.SECTION_TITLE]: COLORS.PASTEL_BLUE_LIGHT,
    [COLOR_KEYS.PARAGRAPH]: COLORS.PASTEL_BLUE_DARK,
    [COLOR_KEYS.FAIR]: COLORS.PASTEL_ORANGE,
    [COLOR_KEYS.POSITIVE_STATE]: COLORS.PASTEL_GREEN,
    [COLOR_KEYS.ALERT_STATE]: COLORS.YELLOW,
    [COLOR_KEYS.NEGATIVE_STATE]: COLORS.PASTEL_RED,
    [COLOR_KEYS.TOGGLE_OFF_BACKGROUND]: COLORS.LIGHT_GRAY,
    [COLOR_KEYS.TOGGLE_OFF_FOREGROUND]: COLORS.WHITE,
    [COLOR_KEYS.TOGGLE_ON_BACKGROUND]: COLORS.PASTEL_GREEN,
    [COLOR_KEYS.TOGGLE_ON_FOREGROUND]: COLORS.WHITE,
    [COLOR_KEYS.DOT_INDICATOR_ACTIVE]: COLORS.PASTEL_BLUE_LIGHT,
    [COLOR_KEYS.DOT_INDICATOR_INACTIVE]: COLORS.LIGHT_GRAY,
    [COLOR_KEYS.CIRCLE_ICON_FOREGROUND]: COLORS.LIGHT_GRAY,
    [COLOR_KEYS.CIRCLE_ICON_BACKGROUND]: COLORS.WHITE,
    [COLOR_KEYS.CAMERA_OVERLAY]: COLORS.WHITE_OVERLAY,
    [COLOR_KEYS.TRANSPARENT]: COLORS.TRANSPARENT,
    [COLOR_KEYS.WHITE]: COLORS.WHITE,
    [COLOR_KEYS.BLACK]: COLORS.BLACK,
    [COLOR_KEYS.TOOLTIP]: COLORS.DARK_GRAY,
  },
};
