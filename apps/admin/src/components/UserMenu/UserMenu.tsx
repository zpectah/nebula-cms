import { useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import config from '../../config';
import { MuiButtonColor } from '../../types';

interface UserMenuProps {
  buttonColor?: MuiButtonColor;
}

const UserMenu = ({ buttonColor }: UserMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const { routes } = config;

  const openHandler = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const closeHandler = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title={'User menu'}>
        <IconButton
          id="user-menu-button"
          aria-controls={open ? 'user-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={openHandler}
          color={buttonColor}
        >
          <AccountCircleIcon />
        </IconButton>
      </Tooltip>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={closeHandler}
        slotProps={{
          list: {
            'aria-labelledby': 'user-menu-button',
          },
        }}
      >
        <MenuItem component={Link} to={routes.profile.path} onClick={closeHandler}>
          Profile
        </MenuItem>
        <MenuItem component={Link} to={routes.login.path} onClick={closeHandler}>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
