import { Box, Divider, Grid, IconButton, List, ListItemButton, ListItemText } from '@mui/material';
import Icons from '@/components/icons';
import {footerTitle, footerInfoList, footerSocialIconList} from '@/constants/footer';
import Typography from '../../Typography';

const Footer = () => {
  return (
    <Box component={"footer"} sx={{ backgroundColor: 'primary.main' }}>
      <Grid container sx={{padding: 8}}>
        <Grid item sx={{flexGrow: 1}}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Icons.Logo />
            <Typography color="textSecondary" variant="caption" fontWeight={700}>
              {footerTitle}
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Grid container>
            {footerInfoList?.map(({title, links}) => (
              <Grid item key={title}>
                <Typography color="textPrimary">{title}</Typography>
                <Box>
                  <List sx={{paddingRight: 4}}>
                    {links?.map(({text, url}) => (
                      <ListItemButton key={text} href={url} sx={{py: 1, px: 0}}>
                        <ListItemText primary={text} />
                      </ListItemButton>
                      )
                    )}
                  </List>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <Box sx={{ px: 8, py: 3}}>
        {footerSocialIconList?.map(({Icon, link}) => (
          <IconButton key={link} href={link} sx={{mx: 1}}>
            <Icon />
          </IconButton>
        ))}
      </Box>
    </Box>
  )
}

export default Footer;
