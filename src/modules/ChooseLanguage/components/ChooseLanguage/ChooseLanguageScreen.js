import React from 'react';

import { OptionsSelectionList, RCImage, RCText, RCView, PrimaryButton } from 'components';
import { assets } from 'common/theme';
import I18N_KEY from 'src/i18n/key';
import styles from './styles';

const ChooseLanguageScreen = ({ options, selected, onChangeLanguage, confirm }) => {
  return (
    <RCView style={styles.container}>
      <RCImage style={styles.logo} source={assets.translationLogo} />
      <RCText style={styles.title} i18nKey={I18N_KEY.LANGUAGE_SCREEN_TITLE} />
      <RCText style={styles.subtitle} i18nKey={I18N_KEY.LANGUAGE_SCREEN_DESCRIPTION} />
      <OptionsSelectionList
        style={styles.radioContainer}
        options={options}
        selected={selected}
        onChange={onChangeLanguage}
      />
      <PrimaryButton onPress={confirm} i18nKey={I18N_KEY.LET_START} />
    </RCView>
  );
};

export default ChooseLanguageScreen;
