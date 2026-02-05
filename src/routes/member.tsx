/* MUI Components */
import { Box } from "@mui/material";
import { APP_BAR_HEIGHT, PAGE_MARGIN } from "../constants";

/* Table */
import Table from "../components/Table/Table";

/* Table Data */
import { memberColumns, memberRows } from "../components/Table/Table.data";

/* Member Route */
export default function Member() {
  /* Render Member Route */
  return (
    <Box
      sx={{
        m: `${PAGE_MARGIN}px`,
        display: "flex",
        height: `calc(100vh - ${APP_BAR_HEIGHT + PAGE_MARGIN * 2}px)`,
        justifyContent: "center",
      }}
    >
      <Table columns={memberColumns} rows={memberRows} />
    </Box>
  );
}
