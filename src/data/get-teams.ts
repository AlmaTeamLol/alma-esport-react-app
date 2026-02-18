import * as z from "zod";

import teams from "@/assets/json/teams.json";
import { teamSchema } from "@/schemas/team";
import type { ITeam } from "@/types/types";

export default function getTeams(): ITeam[] {
    return teams.teams
        .map((team) => {
            const result = teamSchema.safeParse(team);

            if (result.success) {
                return result.data;
            } else {
                const prettyErrorSchema = z.prettifyError(result.error);

                console.error(`${team.id} - ${prettyErrorSchema}`);
                return undefined;
            }
        })
        .filter((team) => team !== undefined);
}