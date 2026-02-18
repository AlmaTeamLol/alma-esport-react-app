/* MUI Components */
import { Box } from "@mui/material";

/* Components */
import Table from "@components/Table/Table";

/* Constants */
import {
  APP_BAR_HEIGHT,
  PAGE_MARGIN,
} from "@/utils/constants/navigation-constants";

/* Data */
import getTeams from "@/data/get-teams";
import { teamColumns } from "./team.columns";

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
      <Table columns={teamColumns} data={getTeams()} />
    </Box>
  );
}
