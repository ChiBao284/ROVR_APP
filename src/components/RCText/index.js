import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Text } from 'react-native';

import I18n from 'src/i18n';
import { TEST_SELECTOR } from 'common/constants';
import { selectLanguage } from 'modules/ChooseLanguage/selectors';

const RCText = ({ accessibilityLabel, i18nKey, ...props }) => {
  const [{ translate }, setI18n] = useState({ translate: I18n });
  const language = useSelector(selectLanguage);

  useEffect(() => {
    translate.locale = language;
    setI18n({ translate });
  }, [language, translate]);

  const testProperty = {
    [TEST_SELECTOR]: accessibilityLabel,
  };

  return (
    <Text {...testProperty} {...props}>
      {i18nKey ? translate.t(i18nKey) : props.children}
    </Text>
  );
};

export default RCText;
