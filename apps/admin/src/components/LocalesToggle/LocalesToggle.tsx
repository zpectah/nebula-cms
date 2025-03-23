import { useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import config from '../../config';
import { useLocales } from '../../helpers';
import { MuiButtonColor } from '../../types';

interface LocalesToggleProps {
  buttonColor?: MuiButtonColor;
}

const LocalesToggle = ({ buttonColor }: LocalesToggleProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { i18n, t } = useTranslation();
  const { locale, setLocales } = useLocales();

  const open = Boolean(anchorEl);
  const idPrefix = 'locale-toggle';

  const openHandler = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
  const closeHandler = () => setAnchorEl(null);
  const setLocaleHandler = (locale: string) =>
    i18n.changeLanguage(locale).then(() => {
      setLocales(locale);
      closeHandler();
    });

  return (
    <>
      <Tooltip title={config.locales.keys[locale]}>
        <IconButton
          id={`${idPrefix}-trigger`}
          onClick={openHandler}
          aria-controls={open ? `${idPrefix}-menu` : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          color={buttonColor}
        >
          <TranslateIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id={`${idPrefix}-menu`}
        open={open}
        onClose={closeHandler}
        slotProps={{
          list: {
            'aria-labelledby': `${idPrefix}-trigger`,
          },
        }}
      >
        {config.locales.available.map((loc) => (
          <MenuItem
            key={loc}
            id={`${idPrefix}-menu-item-${loc}`}
            onClick={() => setLocaleHandler(loc)}
            selected={locale === loc}
          >
            {config.locales.keys[loc]}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LocalesToggle;
