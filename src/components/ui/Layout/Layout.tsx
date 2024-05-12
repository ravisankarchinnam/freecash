'use client';

import { ReactNode, useState } from 'react'
import {Box, Toolbar, styled} from '@mui/material';
import Icons from '@/components/icons';
import Header, { BottomNavigation } from './Header';
import Footer from './Footer';

const Content = styled('div', { shouldForwardProp: (prop) => prop !== 'open' && prop !== 'chatDrawerWidth' })<{
  open?: boolean;
  chatDrawerWidth?: number | string;
}>(({ theme, open, chatDrawerWidth }) => ({
  width: '100%',
  overflow: 'hidden',
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -chatDrawerWidth!,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
  position: 'relative',
}));


const Main = ({ children }: { children: ReactNode; }) => {
  const [open, setOpen] = useState(false);
  const chatDrawerWidth = 300;  
  const toggleDrawerOpen = () => {
    setOpen(!open);
  };

  const bottomNavigationOptions = [
    {label: '$200k Event', Icon: Icons.Event, href: '/event',},
    {label: 'Aufgaben', Icon: Icons.Earn, href: '/earn', isCentered: true},
    {label: 'Auszahlen', Icon: Icons.Cashout, href: '/cashout',},
    {label: 'Chat', Icon: Icons.Chat, onClick: toggleDrawerOpen},
  ];
  
  return (
    <>
    <Box display="flex">
      <Header open={open} toggleDrawerOpen={toggleDrawerOpen} chatDrawerWidth={chatDrawerWidth}>
      <Content open={open} chatDrawerWidth={chatDrawerWidth}>
        <Toolbar />
        <main>
          {children}
        </main>
        <Footer />
      </Content>
      </Header>
    </Box>
    <Box sx={{ display: { sm: 'flex', md: 'none' }}}>
      <BottomNavigation options={bottomNavigationOptions} />
    </Box>
    </>
  );
}

export default Main;
