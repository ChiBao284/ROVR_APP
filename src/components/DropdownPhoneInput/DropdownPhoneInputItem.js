import React from 'react';
import { View } from 'react-native';

import { RCImage, RCText, RCTouchableOpacity } from 'components';
import styles from './styles';

const DropdownPhoneInputItem = ({ item, selectedItemId }) => {
  const isFocused = item.id === selectedItemId;

  return (
    <RCTouchableOpacity key={item.id} accessibilityLabel={`item-phone-${item.name}`}>
      <View style={[styles.dropDownItem, isFocused && styles.focusedItemStyle]}>
        <RCImage source={item.logo} />
        <RCText style={styles.itemPhonePrefix}>{item.prefix}</RCText>
        <RCText style={styles.itemPhoneName}>{item.name}</RCText>
      </View>
    </RCTouchableOpacity>
  );
};

export default DropdownPhoneInputItem;
