import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

export type NavigationOption = {
    label: string;
    Icon: () => JSX.Element;
    href: string;
}

export type NavigationProps = {
    options: NavigationOption[];
}

export const Navigation = ({options}: NavigationProps) => {
  const pathname = usePathname();

  return (
    <List>
    {options.map(({label, Icon, href}) => (
        <ListItem key={label}>
            <ListItemButton LinkComponent={Link} href={href} selected={pathname === href}>
            <ListItemIcon>
                <Icon />
            </ListItemIcon>
            <ListItemText primary={label} />
            </ListItemButton>
        </ListItem>
    ))}
    </List>
  )
}
