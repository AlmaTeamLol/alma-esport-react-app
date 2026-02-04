/* MUI Components */
import { Box, Typography } from "@mui/material";
import { APP_BAR_HEIGHT, PAGE_MARGIN } from "../constants";

/* Team Route */
export default function Team() {
  /* Render Team Route */
  return (
    <Box
      sx={{
        m: `${PAGE_MARGIN}px`,
        display: "flex",
        height: `calc(100vh - ${APP_BAR_HEIGHT + PAGE_MARGIN * 2}px)`,
        justifyContent: "center",
      }}
    >
      <Typography variant="h2" align="center">
        TEAM
      </Typography>
    </Box>
  );
}
