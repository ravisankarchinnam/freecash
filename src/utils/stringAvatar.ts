import colors from "@/theme/colors";

export function stringAvatar(name: string, size: number = 32) {
  return {
    sx: {
      bgcolor: colors.secondary,
      width: size,
      height: size,
    },
    children: name.charAt(0).toUpperCase(),
  };
}
