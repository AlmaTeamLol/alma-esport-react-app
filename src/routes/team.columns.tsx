import * as React from "react";

import type { ITableColumn } from "@components/Table/Table.types";
import type { ITeam } from "@/types/types";
import { Box, Chip } from "@mui/material";

function renderPlayersColumn(
  column: ITableColumn<ITeam>,
  row: ITeam,
): React.ReactElement {
  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" gap={1}>
      {row.players.map((player) => (
        <Chip
          key={player.id}
          label={player.name}
          variant="outlined"
          size="small"
        />
      ))}
    </Box>
  );
}
function renderCoachsColumn(
  column: ITableColumn<ITeam>,
  row: ITeam,
): React.ReactElement {
  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" gap={1}>
      {row.coachs.map((coach) => (
        <Chip
          key={coach.id}
          label={coach.name}
          variant="outlined"
          size="small"
        />
      ))}
    </Box>
  );
}

function createTeamColumn(
  key: keyof ITeam,
  title: string,
  align: "left" | "center" | "right",
  render?: (column: ITableColumn<ITeam>, row: ITeam) => React.ReactElement,
): ITableColumn<ITeam> {
  return { key, title, align, render };
}

export const teamColumns: ITableColumn<ITeam>[] = [
  createTeamColumn("id", "Id", "center"),
  createTeamColumn("name", "Nom", "center"),
  createTeamColumn("players", "Joueurs", "center", renderPlayersColumn),
  createTeamColumn("coachs", "Coachs", "center", renderCoachsColumn),
];
