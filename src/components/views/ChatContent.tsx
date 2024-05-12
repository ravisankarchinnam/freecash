import { Box, Divider } from "@mui/material";
import ChatCard from "@/components/ui/ChatCard";
import chats from "@/data/chat";
import Typography from "@/components/ui/Typography";
import { format } from "date-fns";

const ChatContent = () => {
  return (
    <Box
      sx={{
        p: 1,
        overflow: "auto",
        scrollbarWidth: "none", // Hide the scrollbar for firefox
        "&::-webkit-scrollbar": {
          display: "none", // Hide the scrollbar for WebKit browsers (Chrome, Safari, Edge, etc.)
        },
        "&-ms-overflow-style:": {
          display: "none", // Hide the scrollbar for IE
        },
      }}
    >
      <Typography variant="h5" isBold color="textSecondary">
        Chat
      </Typography>
      <Divider sx={{ my: 1 }} />
      {chats?.map(({ id, createdAt, ...rest }) => (
        <ChatCard key={id} time={format(new Date(), "hh:mm a")} {...rest} />
      ))}
    </Box>
  );
};

export default ChatContent;
