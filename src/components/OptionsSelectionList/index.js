import React from 'react';
import { RCImage, RCTouchableOpacity, RCText, RCView } from 'components';

import { assets } from 'common/theme';
import styles from './styles';

const OptionsSelectionList = ({ style, options, selected, onChange }) => {
  return (
    <RCView style={[styles.container, style]}>
      {options.map(element => (
        <RCTouchableOpacity
          key={element.key}
          style={[styles.radioTile, element.key === selected && styles.titleSelected]}
          onPress={() => {
            onChange && onChange(element.key);
          }}
        >
          <RCText style={[styles.radioText, element.key === selected && styles.textSelected]}>
            {element.title}
          </RCText>
          {element.key === selected && <RCImage style={styles.checker} source={assets.checker} />}
        </RCTouchableOpacity>
      ))}
    </RCView>
  );
};

export default OptionsSelectionList;
