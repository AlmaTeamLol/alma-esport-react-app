import * as React from "react";

import * as z from "zod";

/* MUI Components */
import { Box, Chip, Typography } from "@mui/material";

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

import members from "@/assets/json/members.json";
import { memberSchema } from "@/schemas/member";

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

const memberColumns: ITableColumn<IMember>[] = [
  createMemberColumn("id", "Id", "center"),
  createMemberColumn("name", "Nom", "center"),
  createMemberColumn("riotId", "Riot Id", "center"),
  createMemberColumn("role", "Rôle", "center", renderRoleColumn),
  createMemberColumn("lane", "Lane", "center", renderLaneColumn),
  createMemberColumn("status", "Statut", "center"),
  createMemberColumn("team", "Équipe", "center"),
];

/* Member Route */
export default function Member() {
  const membersData: IMember[] = members.members
    .map((member) => {
      const result = memberSchema.safeParse(member);

      if (result.success) {
        return result.data;
      } else {
        const prettyErrorSchema = z.prettifyError(result.error);

        console.error(`${member.riotId} - ${prettyErrorSchema}`);
        return undefined;
      }
    })
    .filter((member) => member !== undefined);
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
      <Table columns={memberColumns} data={membersData} />
    </Box>
  );
}
