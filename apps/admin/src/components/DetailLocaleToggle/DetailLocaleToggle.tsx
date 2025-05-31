import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import config from '../../config';

interface DetailLocaleToggleProps {
  locales: string[];
  locale: string;
  onChange: (locale: string) => void;
}

const DetailLocaleToggle = ({ locales, locale, onChange }: DetailLocaleToggleProps) => (
  <ToggleButtonGroup value={locale} onChange={(_, value) => onChange(value)} size="small" exclusive>
    {locales.map((loc: string) => (
      <ToggleButton
        key={loc}
        value={loc}
        sx={({ spacing }) => ({ paddingLeft: spacing(1.75), paddingRight: spacing(1.75) })}
      >
        {config.locales.keys[loc]}
      </ToggleButton>
    ))}
  </ToggleButtonGroup>
);

export default DetailLocaleToggle;
