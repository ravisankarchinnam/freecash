import { Paper, Box } from "@mui/material";
import Typography from "@/components/ui/Typography";

export default function Event() {
  return (
    <Box>
      <Box
        sx={{
          py: 4,
          background: "url(/images/slot_aprilmay2024_desktop.png)",
          textAlign: "center",
        }}
      >
        <Typography gutterBottom variant="h1" isGradient isBold>
          $200,000 Event
        </Typography>
        <Typography
          gutterBottom
          color="secondary"
          backgroundSecondary
          isInlineBlock
          hasRadius
          px={1.2}
          py={0.5}
        >
          Spring event April 19th - May 19th
        </Typography>
        <Typography gutterBottom isBold>
          Get free Gems when you earn. Use the Gems to spin & win up to:
        </Typography>
        <Typography variant="h5" isGradient isBold>
          $1,000
        </Typography>
        <Box
          sx={{
            height: 500,
            width: "100%",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              background:
                "url(/images/event-slot.png) no-repeat center center / contain",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Box>
      <Paper sx={{ textAlign: "center", py: 10 }}>
        <Typography gutterBottom variant="h5" isBold>
          Top winners last 7 days:{" "}
          <Typography
            backgroundSecondary
            hasRadius
            px={1.2}
            py={0.5}
            isBold
            isInlineBlock
            color="secondary"
          >
            Total won: $78,436.70
          </Typography>
        </Typography>
        <Typography gutterBottom variant="h5" isBold>
          Quest Rewards:{" "}
          <Typography
            backgroundSecondary
            hasRadius
            px={1.2}
            py={0.5}
            isBold
            isInlineBlock
            color="secondary"
          >
            Win up to $1,000
          </Typography>
        </Typography>
      </Paper>
    </Box>
  );
}
