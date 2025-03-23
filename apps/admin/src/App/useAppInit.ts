import { useEffect } from 'react';
import { useLocales, useTheme } from '../helpers';

export const useAppInit = () => {
  const { init: initLocales, locale } = useLocales();
  const { init: initTheme, mode } = useTheme();

  useEffect(() => {
    initLocales();
    initTheme();
  }, []);

  return {
    locales: locale,
    mode,
  };
};
