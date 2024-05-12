"use client";

import { createTheme } from "@mui/material/styles";
import { darkScrollbar } from "@mui/material";
import colors from "./colors";
import fonts from "./fonts";

const { primary, secondary, text, background, divider, action, scrollBar } =
  colors;

const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    text: {
      primary: text.primary,
      secondary: text.secondary,
    },
    background: {
      default: background.default,
    },
    action: {
      active: action.active,
    },
    divider: divider,
  },
  typography: {
    fontFamily: fonts.style.fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          ...darkScrollbar({
            active: scrollBar.active,
            thumb: scrollBar.thumb,
            track: scrollBar.track,
          }),
          scrollbarWidth: "thin",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          position: "relative",
          transform: "translate(0, 0) scale(1)",
          marginBottom: 8,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          background: background.ternary,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          padding: "8px 42px",
          borderRadius: 6,
          textTransform: "none",
          fontWeight: 700,
        },
        containedPrimary: {
          backgroundColor: background.primary,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          backgroundColor: background.primary,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          padding: 8,
          borderRadius: 6,
          color: text.secondary,
          "&:hover": {
            color: secondary,
            backgroundColor: "transparent",
            "& svg": {
              color: secondary,
            },
          },
          "&.Mui-selected": {
            backgroundColor: `${background.hover} !important`,
            color: secondary,
            "& svg": {
              color: secondary,
            },
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: "0.9rem",
          fontWeight: 600,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          marginRight: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: background.default,
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          height: 75,
          color: text.secondary,
          backgroundColor: background.default,
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: secondary,
          },
        },
        label: {
          fontSize: "0.685rem",
          marginTop: 6,
          "&.Mui-selected": {
            fontSize: "0.635rem",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          gap: 16,
        },
        indicator: {
          height: "100%",
          color: primary,
          backgroundColor: secondary,
          borderRadius: 100,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          zIndex: 1,
          textTransform: "none",
          fontWeight: 700,
          color: text.secondary,
          backgroundColor: "transparent",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: background.drawer,
        },
      },
    },
  },
});

export default theme;
