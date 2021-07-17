import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { ListItemText } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { menuItems } from '../mappings/menuItems';

// style used in the component
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#646d8f',
        border: 'none',
        boxShadow: 'none'
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    link: {
        textDecoration: 'none'
    },
    listItemIcon: {
        minWidth: '30px'
    },
    button: {
        color: '#f5f5f5'
    }
}));

// header component
const Header = () => {
    // useHistory hook
    const history = useHistory();

    // use material ui styles
    const classes = useStyles();

    // initialize anchor element to null
    const [anchorEl, setAnchorEl] = useState(null);

    // set open based on anchor element
    const open = Boolean(anchorEl);
    // use theme from material style
    const theme = useTheme();
    // set isMobile depending on media query result
    const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

    // menu click handler for small screen
    const menuClickHandler = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // menu item click handler
    const menuItemClickHandler = (pageUrl) => {
        // update history with page url
        history.push(pageUrl);
        setAnchorEl(null);
    };

    // menu close handler
    const menuCloseHandler = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    {/* if screen is mobile render the menu button, else render buttons in nav bar */}
                    {isMobile ? (
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                            onClick={menuClickHandler}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <div>
                            {menuItems.map((menuItem) => {
                                return (
                                    <Link
                                        to={menuItem.pageUrl}
                                        className={classes.link}
                                        key={menuItem.title}
                                    >
                                        <Button
                                            className={classes.button}
                                            startIcon={menuItem.icon}
                                        >
                                            {menuItem.title}
                                        </Button>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                    <div>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            open={open}
                            onClose={menuCloseHandler}
                        >
                            {menuItems.map((menuItem) => {
                                const { title, pageUrl, icon } =
                                    menuItem;
                                return (
                                    <MenuItem
                                        onClick={() =>
                                            menuItemClickHandler(
                                                pageUrl
                                            )
                                        }
                                        key={title}
                                    >
                                        <ListItemIcon
                                            className={
                                                classes.listItemIcon
                                            }
                                        >
                                            {icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={title}
                                        />
                                    </MenuItem>
                                );
                            })}
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;
