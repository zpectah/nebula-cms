import { create } from 'zustand';
import { Locale } from '../types';

interface LocalesStore {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const useLocalesStore = create<LocalesStore>((set) => {
  const current = window.localStorage.getItem('APP_LOCALES') ?? 'en';

  const setLocalesHandler = (locale: string) => {
    set({ locale });
    window.localStorage.setItem('APP_LOCALES', locale);
  };

  return {
    locale: current,
    setLocale: setLocalesHandler,
  };
});

export default useLocalesStore;
