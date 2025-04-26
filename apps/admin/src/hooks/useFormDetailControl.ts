import { useEffect, useState } from 'react';
import config from '../config';
import { useSettingsQuery } from './query';

export const useFormDetailControl = () => {
  const [processing, setProcessing] = useState(false);
  const [defaultLocale, setDefaultLocale] = useState(config.locales.content);
  const [locales, setLocales] = useState<string[]>([]);

  const { settingsQuery } = useSettingsQuery();

  const { data: settingsData } = settingsQuery;

  useEffect(() => {
    if (settingsData) {
      setLocales(settingsData.locales_active);
    }
  }, [settingsData]);

  return {
    isProcessing: processing,
    setProcessing,
    locale: defaultLocale,
    setDefaultLocale,
    locales,
  };
};
