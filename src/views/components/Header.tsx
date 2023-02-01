import React, { useState, forwardRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Menu, AccountCircle } from '@mui/icons-material';

function Header() {
    const [sidebar, setSidebar] = useState(false);

    return (
        <>
            <SwipeableDrawer
                anchor="left"
                open={sidebar}
                onOpen={() => {
                    setSidebar(!sidebar);
                }}
                onClose={() => {
                    setSidebar(!sidebar);
                }}
            >
                <Box
                    onClick={() => {
                        setSidebar(!sidebar);
                    }}
                >
                    <List>
                        <ListItem>
                            <ListItemButton>
                                <ListItemText>プロジェクト</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </SwipeableDrawer>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    position="static"
                    sx={{ justifyContent: 'space-between' }}
                >
                    <Toolbar>
                        <Box flexDirection="row" sx={{ flexGrow: 0 }}>
                            <IconButton
                                aria-label="menu"
                                color="inherit"
                                size="large"
                                sx={{ mr: 2 }}
                                onClick={() => {
                                    setSidebar(!sidebar);
                                }}
                            >
                                <Menu />
                            </IconButton>
                            <Typography>Scratch</Typography>
                        </Box>
                        <Tooltip title="profile">
                            <IconButton color="inherit" size="large">
                                <AccountCircle />
                            </IconButton>
                        </Tooltip>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default Header;
