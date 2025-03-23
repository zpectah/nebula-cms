import { useTranslation } from 'react-i18next';
import config from '../config';
import { useLocalesStore } from '../store';

export const useLocales = () => {
  const { i18n } = useTranslation();
  const { locale, setLocale } = useLocalesStore();

  const initHandler = () => {
    const current = window.localStorage.getItem('APP_LOCALES') ?? config.locales.default;

    setLocale(current);
    i18n.changeLanguage(current);
  };

  return {
    locale,
    setLocales: setLocale,
    init: initHandler,
  };
};
