import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { goBack } from './navigationUtils';
import { assets } from 'common/theme';
import { RCText } from 'src/components';
import { BACK_SIGN_IN_BUTTON } from 'src/i18n/key';
import styles from './styles';

export const hideHeaderOptions = {
  headerShown: false,
};

export const defaultOptions = {
  headerShadowVisible: false,
};

export const backButtonOptions = leftTitle => ({
  headerTitleAlign: 'center',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        goBack();
      }}
    >
      <View style={styles.backButtonView}>
        <Image style={{}} source={assets.backIcon} />
        {leftTitle && <RCText style={styles.titleBack} i18nKey={BACK_SIGN_IN_BUTTON} />}
      </View>
    </TouchableOpacity>
  ),
});

export const titleOptions = ({ title, i18nKey }) => ({
  headerTitleAlign: 'center',
  headerBackVisible: false,
  headerTitle: () => <RCText style={styles.title} i18nKey={i18nKey || ''}>{title}</RCText>,
});
