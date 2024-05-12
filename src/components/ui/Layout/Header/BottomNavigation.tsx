import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  styled,
  Paper,
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationAction as MuiBottomNavigationAction,
  BottomNavigationActionProps as MuiBottomNavigationActionProps,
} from "@mui/material";
import colors from "@/theme/colors";

type BottomNavigationActionProps = MuiBottomNavigationActionProps & {
  isCentered: boolean;
  isSelected: boolean;
  href?: string;
};

const BottomNavigationAction = styled(MuiBottomNavigationAction, {
  shouldForwardProp: (prop) => prop !== "isCentered" && prop !== "isSelected",
})<BottomNavigationActionProps>(({ isCentered, isSelected }) => ({
  background: isCentered
    ? isSelected
      ? colors.background.gradient
      : colors.background.drawer
    : "inherit",
  color: isCentered && isSelected ? "#fff !important" : "inherit",
  top: isCentered ? -10 : "auto",
  minWidth: "auto",
  maxWidth: "fit-content",
  borderRadius: 6,
  fontSize: "0.8rem",
}));

export type BottomNavigationOption = {
  label: string;
  Icon: () => JSX.Element;
  isCentered?: boolean;
  onClick?: () => void;
  href?: string;
};

export type BottomNavigationProps = {
  options: BottomNavigationOption[];
};

export const BottomNavigation = ({ options }: BottomNavigationProps) => {
  const pathname = usePathname();
  const [value, setValue] = useState(0);

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
      }}
      elevation={3}
    >
      <MuiBottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ justifyContent: "space-evenly" }}
      >
        {options?.map((bottomNav) => {
          const { label, Icon, onClick, href, isCentered } = bottomNav;
          const extraProps = {
            ...(href ? { LinkComponent: Link, href } : undefined),
          };
          return (
            <BottomNavigationAction
              isCentered={!!isCentered}
              isSelected={pathname === href}
              key={label}
              label={label}
              icon={<Icon />}
              onClick={onClick}
              {...extraProps}
            />
          );
        })}
      </MuiBottomNavigation>
    </Paper>
  );
};
