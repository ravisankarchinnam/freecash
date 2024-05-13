import { Avatar, Box, Card, Grid } from "@mui/material";
import Typography from "@/components/ui/Typography";

type ChatCardProps = {
  imageUrl: string;
  username: string;
  message: string;
  time: string;
};

const ChatCard = ({ imageUrl, username, message, time }: ChatCardProps) => {
  return (
    <Card
      sx={{
        my: 1,
        borderRadius: 2,
      }}
    >
      <Box sx={{ p: 1.5 }}>
        <Grid container direction="column" spacing={2}>
          <Grid item container alignItems="center" spacing={1} wrap="nowrap">
            <Grid item>
              <Avatar
                alt={username}
                src={imageUrl}
                sx={{ width: 30, height: 30 }}
              />
            </Grid>
            <Grid item xs={4}>
              <Typography
                variant="body2"
                color="textSecondary"
                isBold
                truncate
              >
                {username}
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                ml: "auto",
                display: "inline-flex",
                justifyContent: "flex-end",
              }}
            >
              <Typography variant="overline" color="textSecondary">
                {time}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body2" color="textSecondary">
              {message}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default ChatCard;
