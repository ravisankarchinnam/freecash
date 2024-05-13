import { Drawer } from "@mui/material";
import useDrawerOutsideClick from "@/hooks/useDrawerOutsideClick";
import ChatContent from "@/components/views/ChatContent";

type ChatDrawerProps = {
  open: boolean;
  onClose: () => void;
  width: number | string;
};

const ChatDrawer = ({ open, onClose, width }: ChatDrawerProps) => {
  const { ref } = useDrawerOutsideClick(open, onClose);

  return (
    <Drawer
      ref={ref}
      variant={"persistent"}
      anchor="right"
      open={open}
      sx={{
        width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: {
            xs: "100%",
            md: width,
          },
          mt: {
            xs: 7,
            md: 0,
          },
          pb: {
            xs: 16,
            md: 0,
          },
        },
      }}
    >
      <ChatContent />
    </Drawer>
  );
};

export default ChatDrawer;
