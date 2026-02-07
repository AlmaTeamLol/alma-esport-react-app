import * as z from "zod";
import { memberSchema } from "@/schemas/member";
import { teamSchema } from "@/schemas/team";

export type IMember = z.infer<typeof memberSchema>;
export type ITeam = z.infer<typeof teamSchema>;