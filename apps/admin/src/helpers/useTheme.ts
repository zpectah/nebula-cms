import { useColorScheme } from '@mui/material/styles';
import config from '../config';
import { useThemeStore } from '../store';
import { ThemeMode } from '../types';
import { themeModeKeys } from '../enums';

export const useTheme = () => {
  const { mode, setMode } = useColorScheme();
  const store = useThemeStore();

  const setModeHandler = (mode: ThemeMode) => {
    if (!mode) return;

    setMode(mode);
    store.setMode(mode);
  };

  const toggleModeHandler = () => {
    let val;

    switch (mode) {
      case themeModeKeys.dark:
        val = themeModeKeys.system;
        break;
      case themeModeKeys.light:
        val = themeModeKeys.dark;
        break;
      case themeModeKeys.system:
      default:
        val = themeModeKeys.light;
        break;
    }

    setModeHandler(val as ThemeMode);
  };

  const initHandler = () => {
    const current = window.localStorage.getItem('APP_THEME_MODE') ?? config.mode;

    setModeHandler(current as ThemeMode);
  };

  return {
    mode,
    setMode: setModeHandler,
    toggleMode: toggleModeHandler,
    init: initHandler,
  };
};
