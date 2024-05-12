import { ReactNode } from "react";
import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Drawer,
  IconButton,
  styled,
  Toolbar,
  Box,
} from "@mui/material";
import { Navigation } from "./Navigation";
import { navOptions } from "@/constants/header";
import Icons from "@/components/icons";
import Auth from "@/components/global/Auth";

const drawerWidth = 200;

type HeaderProps = {
  open: boolean;
  toggleDrawerOpen: () => void;
  chatDrawerWidth: number | string;
  children: ReactNode;
};

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  chatDrawerWidth?: number | string;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "chatDrawerWidth",
})<AppBarProps>(({ theme, open, chatDrawerWidth }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${chatDrawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: chatDrawerWidth,
  }),
}));

const Header = ({
  open,
  toggleDrawerOpen,
  chatDrawerWidth,
  children,
}: HeaderProps) => {
  return (
    <>
      <AppBar
        open={open}
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        elevation={0}
        chatDrawerWidth={chatDrawerWidth}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Icons.Logo />
          </Box>
          <Box display="flex" alignItems="center">
            <Auth />
            <IconButton
              aria-label="open drawer"
              edge="end"
              onClick={toggleDrawerOpen}
              sx={{ ml: 2, display: { xs: "none", md: "inline-flex" } }}
            >
              <Icons.Chat />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          display: { xs: "none", md: "block" },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <Navigation options={navOptions} />
        </Box>
      </Drawer>
      {children}
      <Drawer
        sx={{
          width: chatDrawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: chatDrawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        Chat
      </Drawer>
    </>
  );
};

export default Header;
