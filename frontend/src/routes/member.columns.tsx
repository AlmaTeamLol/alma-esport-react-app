import * as React from "react";

/* MUI Components */
import { Box, Chip } from "@mui/material";

/* Types */
import type { ITableColumn } from "@components/Table/Table.types";
import type { IMember } from "@/types/types";

/* Assets */
import { Lanes } from "@/assets/images";

function renderLaneColumn(
  column: ITableColumn<IMember>,
  row: IMember,
): React.ReactElement {
  const webp =
    (Lanes.Webp as Record<string, string>)[row.lane] ?? Lanes.Webp.All;
  const png = (Lanes.Png as Record<string, string>)[row.lane] ?? Lanes.Png.All;

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <picture>
        <source srcSet={webp} type="image/webp" sizes="32px" />
        <img src={png} alt={row.lane} width="32px" height="32px" />
      </picture>
    </Box>
  );
}

function renderRoleColumn(
  column: ITableColumn<IMember>,
  row: IMember,
): React.ReactElement {
  return (
    <Box display="flex" flexDirection="column" flexWrap="wrap" gap={1}>
      {row.role.map((role) => (
        <Chip
          key={role}
          label={role}
          variant="filled"
          size="small"
          color={
            role === "Capitaine"
              ? "success"
              : role === "Coach"
                ? "error"
                : "info"
          }
        />
      ))}
    </Box>
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

export const memberColumns: ITableColumn<IMember>[] = [
  createMemberColumn("id", "Id", "center"),
  createMemberColumn("name", "Nom", "center"),
  createMemberColumn("riotId", "Riot Id", "center"),
  createMemberColumn("role", "Rôle", "center", renderRoleColumn),
  createMemberColumn("lane", "Lane", "center", renderLaneColumn),
  createMemberColumn("status", "Statut", "center"),
  createMemberColumn("team", "Équipe", "center"),
];
