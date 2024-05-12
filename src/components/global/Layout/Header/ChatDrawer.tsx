import { Drawer } from "@mui/material";
import useDrawerOutsideClick from "@/hooks/useDrawerOutsideClick";

type ChatDrawerProps = {
  open: boolean;
  onClose: () => void;
  width: number | string;
};

const ChatDrawer = ({ open, onClose, width }: ChatDrawerProps) => {
  const {ref} = useDrawerOutsideClick(open, onClose);

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
            width,
          },
        }}
      >
        Chat
      </Drawer>
  );
};

export default ChatDrawer;
