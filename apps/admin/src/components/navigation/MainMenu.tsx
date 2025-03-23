import { useState, MouseEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import config from '../../config';
import { MuiButtonColor } from '../../types';

interface MainMenuProps {
  buttonColor?: MuiButtonColor;
}

const MainMenu = ({ buttonColor }: MainMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const { routes } = config;
  const isOpen = Boolean(anchorEl);

  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      name: 'dashboard',
      path: routes.dashboard.path,
      label: t('route.dashboard'),
    },
    {
      name: 'settings',
      path: routes.settings.path,
      label: t('route.settings'),
    },
    {
      name: 'articles',
      path: routes.articles.path,
      label: t('route.articles'),
    },
    {
      name: 'attachments',
      path: routes.attachments.path,
      label: t('route.attachments'),
    },
    {
      name: 'categories',
      path: routes.categories.path,
      label: t('route.categories'),
    },
    {
      name: 'tags',
      path: routes.tags.path,
      label: t('route.tags'),
    },
    {
      name: 'menu',
      path: routes.menu.path,
      label: t('route.menu'),
    },
    {
      name: 'members',
      path: routes.members.path,
      label: t('route.members'),
    },
    {
      name: 'translations',
      path: routes.translations.path,
      label: t('route.translations'),
    },
    {
      name: 'pages',
      path: routes.pages.path,
      label: t('route.pages'),
    },
    {
      name: 'users',
      path: routes.users.path,
      label: t('route.users'),
    },
    {
      name: 'messages',
      path: routes.messages.path,
      label: t('route.messages'),
    },
  ];

  const openHandler = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);

  const closeHandler = (__: unknown, reason: string) => {
    setAnchorEl(null);

    if (reason === 'backdropClick') {
      // TODO: reset scroll part ...
    }
  };

  const triggerHandler = (path: string) => navigate(path);

  return (
    <>
      <Tooltip title={t('button.menu')}>
        <IconButton
          id="main-menu-button"
          aria-label="menu"
          aria-controls={isOpen ? 'main-menu-list' : undefined}
          aria-haspopup="true"
          aria-expanded={isOpen ? 'true' : undefined}
          onClick={openHandler}
          color={buttonColor}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Tooltip>
      <Menu
        id="main-menu-list"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={closeHandler}
        slotProps={{
          list: {
            'aria-labelledby': 'main-menu-button',
          },
          paper: {
            style: {
              width: '15rem',
              maxHeight: '20vh',
            },
          },
        }}
      >
        {menuItems.map(({ name, path, label }) => (
          <MenuItem
            key={name}
            id={`main-menu-item-${name}`}
            onClick={() => triggerHandler(path)}
            selected={pathname.includes(path)}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MainMenu;
