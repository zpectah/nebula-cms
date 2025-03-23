import { useTranslation } from 'react-i18next';
import { IconButton, Tooltip } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import { useTheme } from '../../helpers';
import { themeModeKeys } from '../../enums';
import { MuiButtonColor } from '../../types';

interface ThemeToggleProps {
  buttonColor?: MuiButtonColor;
}

const ThemeToggle = ({ buttonColor }: ThemeToggleProps) => {
  const { t } = useTranslation();
  const { mode, toggleMode } = useTheme();

  const icon = {
    [themeModeKeys.light]: <LightModeIcon />,
    [themeModeKeys.dark]: <DarkModeIcon />,
    [themeModeKeys.system]: <SettingsBrightnessIcon />,
  };

  if (!mode) return;

  return (
    <Tooltip title={`${t('button.theme')}: ${t(`theme.${mode}`)}`}>
      <IconButton onClick={toggleMode} color={buttonColor}>
        {icon[mode]}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggle;
