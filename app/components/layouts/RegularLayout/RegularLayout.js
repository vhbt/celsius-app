import React, { Component } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

import testUtil from "../../../utils/test-util";
import RegularLayoutStyle from "./RegularLayout.styles";
import CelHeading from '../../organisms/CelHeading/CelHeading';
import CelText from '../../atoms/CelText/CelText';
import KeyboardShift from '../../../utils/keyboard-shift-util';
import stylesUtil from '../../../utils/styles-util';

class RegularLayout extends Component {

  static propTypes = {
    header: PropTypes.instanceOf(Object),
    padding: PropTypes.string,
    enableParentScroll: PropTypes.bool
  };

  static defaultProps = {
    padding: '20 20 40 20',
    enableParentScroll: true
  };

  render() {
    const { theme, children, header, padding, enableParentScroll } = this.props;
    const style = RegularLayoutStyle(theme);
    const paddings = stylesUtil.getPadding(padding);
    return (
      <React.Fragment>
        {header && (
          <CelHeading {...header}>
            {header.children ? header.children :
              <CelText style={style.headerTitle} align="center" type="H3">{header.title || ""}</CelText>
            }
          </CelHeading>
        )}
        <SafeAreaView style={{flex: 1}}>
          <ScrollView keyboardShouldPersistTaps='handled' keyboardDismissMode='on-drag' scrollEnabled={enableParentScroll} style={style.container} contentContainerStyle={[{flexGrow: 1}, paddings]}>
            <KeyboardShift>
              <React.Fragment>
                {children}
              </React.Fragment>
            </KeyboardShift>
          </ScrollView>
        </SafeAreaView>
      </React.Fragment>
    );
  }
}

export default testUtil.hookComponent(RegularLayout);
