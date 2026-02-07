import * as z from "zod";
import { memberSchema } from "./member";

const teamSchema = z.object({
    id: z.number(),
    name: z.string(),
    players: z.array(memberSchema),
    coachs: z.array(memberSchema),
}).transform((data) => ({
    ...data,
    players: data.players.filter((player) => player.role.includes('Joueur') && player.team === data.name),
    coachs: data.coachs.filter((coach) => coach.role.includes('Coach') && coach.team === data.name),
}));

export { teamSchema };