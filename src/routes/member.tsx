import * as React from "react";

/* MUI Components */
import { Box, Typography } from "@mui/material";

/* Components */
import Table from "@components/Table/Table";
import type { ITableColumn } from "@components/Table/Table.types";

/* Types */
import type { IMember } from "@/types/types";

/* Constants */
import {
  APP_BAR_HEIGHT,
  PAGE_MARGIN,
} from "@/utils/constants/navigation-constants";

function renderLaneColumn(
  column: ITableColumn<IMember>,
  row: IMember,
): React.ReactElement {
  return (
    <Typography variant="body1" align="center">
      {row.lane}
    </Typography>
  );
}

function createMemberColumn(
  key: keyof IMember,
  title: string,
  align: "left" | "center" | "right",
  render?: (column: ITableColumn<IMember>, row: IMember) => React.ReactElement,
): ITableColumn<IMember> {
  return { key, title, align, render };
}

const memberColumns: ITableColumn<IMember>[] = [
  createMemberColumn("id", "Id", "center"),
  createMemberColumn("name", "Nom", "center"),
  createMemberColumn("riotId", "Riot Id", "center"),
  createMemberColumn("role", "Rôle", "center"),
  createMemberColumn("lane", "Lane", "center", renderLaneColumn),
  createMemberColumn("status", "Statut", "center"),
  createMemberColumn("team", "Équipe", "center"),
];

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
      <Table columns={memberColumns} data={[]} />
    </Box>
  );
}
