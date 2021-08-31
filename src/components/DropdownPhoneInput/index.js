import React, { useState, useCallback } from 'react';
import { View, Text } from 'react-native';

import { RCImage, RCText, RCTextInput, RCTouchableOpacity } from 'components';
import { assets, glyphs } from 'common/theme';
// import { REGIONS } from 'common/constants';
// import DropdownPhoneInputItem from './DropdownPhoneInputItem';
import styles from './styles';

const DropdownPhoneInput = ({
  isError,
  errorText,
  placeholder,
  style,
  label,
  isRequired,
  i18nKeyLabel,
  selectedItem,
  internalRef,
  ...props
}) => {
  const [isFocused, setFocus] = useState(false);
  const focusToggle = useCallback(() => setFocus(!isFocused), [isFocused]);

  return (
    <View style={style}>
      <View style={styles.mainContent}>
        <View style={styles.labelContainer}>
          <RCText style={styles.label} i18nKey={i18nKeyLabel}>
            {label}
          </RCText>
          {isRequired && <Text style={styles.requiredField}>*</Text>}
        </View>
        <View
          style={[
            styles.container,
            isFocused && styles.focusedContainer,
            (isError || errorText) && styles.errorContainer,
          ]}
        >
          <RCTouchableOpacity accessibilityLabel={'open-drop-down-list'}>
            <View style={styles.flagButton}>
              <RCImage source={assets.malaysia} />
              <RCText style={styles.phonePrefix}>+60</RCText>
              <RCImage source={assets.arrowDown} />
            </View>
          </RCTouchableOpacity>
          <RCTextInput
            onFocus={focusToggle}
            onEndEditing={focusToggle}
            style={styles.textInput}
            placeholder={placeholder}
            keyboardType='phone-pad'
            {...props}
          />
        </View>
      </View>
      {errorText && (
        <View style={styles.errorMessage}>
          <Text style={styles.warning}>{glyphs.warning}</Text>
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      )}
      {/* <Modal animationType='slide' transparent={true} visible={true}>
        <View style={styles.phoneContainer}>
          <ScrollView
            showsVerticalScrollIndicator={true}
            // eslint-disable-next-line react-native/no-inline-styles
            style={[styles.scrollViewDropDown, { top: 220 }]}
          >
            {REGIONS.map(item => (
              <DropdownPhoneInputItem key={item.id} item={item} selectedItemId={1} />
            ))}
          </ScrollView>
        </View>
      </Modal> */}
    </View>
  );
};

export default DropdownPhoneInput;
