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
import getMembers from "@/data/get-members";

/* Member table columns */
import { memberColumns } from "./member.columns";

/* Member Route */
export default function Member() {
  return (
    <Box
      sx={{
        m: `${PAGE_MARGIN}px`,
        display: "flex",
        height: `calc(100vh - ${APP_BAR_HEIGHT + PAGE_MARGIN * 2}px)`,
        justifyContent: "center",
      }}
    >
      <Table columns={memberColumns} data={getMembers()} />
    </Box>
  );
}
