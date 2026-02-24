/* MUI Components */
import { Box, Typography } from "@mui/material";

/* Constants */
import {
  APP_BAR_HEIGHT,
  PAGE_MARGIN,
} from "@/utils/constants/navigation-constants";

/* Home Route */
export default function Home() {
  /* Render Home Route */
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
        HOME
      </Typography>
    </Box>
  );
}
