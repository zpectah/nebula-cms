import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import config from '../config';
import resources from './resources';

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: config.locales.available,
    lng: config.locales.default,
    fallbackLng: config.locales.default,
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });
