import React from 'react';

import {
  Box,
  ListItemIcon,
  ListItemText,
  Menu as MUIMenu,
  MenuItem,
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const MenuAccount: React.FunctionComponent = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="row"
        px={1}
        aria-label="open drawer"
        aria-controls="menu-account"
        aira-haspopup="true"
        onClick={handleOpen}
        style={{ cursor: 'pointer' }}
      >
        Username
        <ArrowDownIcon />
      </Box>

      <MUIMenu
        id="menu-account"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        getContentAnchorEl={null}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Exit" />
        </MenuItem>
      </MUIMenu>
    </div>
  );
};

export default MenuAccount;
