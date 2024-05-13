import { ReactNode } from "react";
import { AppBar, Drawer, IconButton, Toolbar, Box } from "@mui/material";
import { Navigation } from "./Navigation";
import { navOptions } from "@/constants/header";
import Icons from "@/components/icons";
import Auth from "@/components/global/Auth";
import ChatDrawer from "./ChatDrawer";

const drawerWidth = 200;

type HeaderProps = {
  open: boolean;
  toggleDrawerOpen: () => void;
  chatDrawerWidth: number | string;
  children: ReactNode;
};

const Header = ({
  open,
  toggleDrawerOpen,
  chatDrawerWidth,
  children,
}: HeaderProps) => {
  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          transition: "all ease-in-out",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          width: {
            ...(open
              ? { xs: "100%", md: `calc(100% - ${chatDrawerWidth}px)` }
              : undefined),
          },
          marginRight: {
            ...(open ? { xs: 0, md: `${chatDrawerWidth}px` } : undefined),
          },
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Icons.Logo />
          </Box>
          <Box display="flex" alignItems="center">
            <Auth />
            <IconButton
              aria-label="open chat"
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
          "& .MuiDrawer-paper": {
            width: drawerWidth,
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
      <ChatDrawer
        open={open}
        onClose={toggleDrawerOpen}
        width={chatDrawerWidth}
      />
    </>
  );
};

export default Header;
