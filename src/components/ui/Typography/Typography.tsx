"use client";

import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
  styled,
} from "@mui/material";
import colors from "@/theme/colors";

export type TypographyProps = MuiTypographyProps & {
  isGradient?: boolean;
  backgroundSecondary?: boolean;
  isBold?: boolean;
  isInlineBlock?: boolean;
  hasRadius?: boolean;
  alignCenter?: boolean;
  truncate?: boolean;
};

const Text = styled(MuiTypography, {
  shouldForwardProp: (prop) =>
    prop !== "isGradient" &&
    prop !== "backgroundSecondary" &&
    prop !== "isBold" &&
    prop !== "isInlineBlock" &&
    prop !== "hasRadius" &&
    prop !== "alignCenter" &&
    prop !== "truncate",
})<TypographyProps>(
  ({
    theme,
    isGradient,
    backgroundSecondary,
    isBold,
    isInlineBlock,
    hasRadius,
    alignCenter,
    truncate,
  }) => ({
    ...(isGradient ? { background: colors.text.gradient } : undefined),
    ...(isGradient ? { color: "transparent" } : undefined),
    ...(backgroundSecondary
      ? { background: colors.background.secondary }
      : undefined),
    ...(isBold ? { fontWeight: 700 } : undefined),
    ...(isInlineBlock ? { display: "inline-block" } : undefined),
    ...(hasRadius ? { borderRadius: theme.spacing(1) } : undefined),
    ...(alignCenter ? { textAlign: "center" } : undefined),
    ...(truncate
      ? {
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }
      : undefined),
  })
);

const Typography = (props: TypographyProps) => <Text {...props} />;

export default Typography;
