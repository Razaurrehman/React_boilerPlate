import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  Person as AccountIcon,
} from "@material-ui/icons";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import { Typography } from "../Wrappers";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";
import { useUserDispatch, signOut } from "../../context/UserContext";

export default function Header(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();
  var layoutDispatch = useLayoutDispatch();
  var userDispatch = useUserDispatch();

  // local
  var [profileMenu, setProfileMenu] = useState(null);

  return (
    <AppBar position="fixed" 
            className={classNames(classes.drawer, {
              [classes.headerOpen]: layoutState.isSidebarOpened,
              [classes.headerClose]: !layoutState.isSidebarOpened,
            })}
            classes={{
              paper: classNames({
                [classes.headerOpen]: layoutState.isSidebarOpened,
                [classes.headerClose]: !layoutState.isSidebarOpened,
              }),
            }}
            open={layoutState.isSidebarOpened}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          onClick={() => toggleSidebar(layoutDispatch)}
          className={classNames(
            classes.headerMenuButtonSandwich,
            classes.headerMenuButtonCollapse,
          )}
        >
          {layoutState.isSidebarOpened ? (
            <></>) : (
            <MenuIcon
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse,
                ),
              }}
            />
          )}
        </IconButton>
        <div className={classes.grow} />
        <IconButton
          aria-haspopup="true"
          color="inherit"
          className={classes.headerMenuButton}
          aria-controls="profile-menu"
          onClick={e => setProfileMenu(e.currentTarget)}
        >
          <AccountIcon classes={{ root: classes.headerIcon }} />
        </IconButton>
  
        <Menu
          id="profile-menu"
          open={Boolean(profileMenu)}
          anchorEl={profileMenu}
          onClose={() => setProfileMenu(null)}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <div className={classes.profileMenuUser}>
            <Typography variant="h4" weight="medium">
              John Smith
            </Typography>
            <Typography
              className={classes.profileMenuLink}
              component="a"
              color="primary"
              href="https://flatlogic.com"
            >
              Flalogic.com
            </Typography>
          </div>
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
            )}
          >
            <AccountIcon className={classes.profileMenuIcon} /> Profile
          </MenuItem>
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
            )}
          >
            <AccountIcon className={classes.profileMenuIcon} /> Tasks
          </MenuItem>
          <MenuItem
            className={classNames(
              classes.profileMenuItem,
              classes.headerMenuItem,
            )}
          >
            <AccountIcon className={classes.profileMenuIcon} /> Messages
          </MenuItem>
          <div className={classes.profileMenuUser}>
            <Typography
              className={classes.profileMenuLink}
              color="primary"
              onClick={() => signOut(userDispatch, props.history)}
            >
              Sign Out
            </Typography>
          </div>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
