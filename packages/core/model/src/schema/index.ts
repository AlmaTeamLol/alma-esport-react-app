import * as z from "zod";

export const LaneSchema = z.enum(['Top', 'Jungle', 'Mid', 'Adc', 'Support']);

export const RiotIdRegex = /[\p{L}\p{M}\s-]{3,16}#[a-zA-Z0-9]{3,5}/gu;
export const RiotIdSchema = z.string().regex(RiotIdRegex);

export const RoleSchema = z.enum(['Capitaine', 'Coach', 'Joueur']);
export const StatusSchema = z.enum(['Lock', 'Sub', 'Tryout', 'Out']);

export const MemberSchema = z.object({
    id: z.number(),
    name: z.string(),
    riotId: RiotIdSchema,
    role: z.array(RoleSchema).min(1),
    lane: LaneSchema,
    status: StatusSchema,
    team: z.array(z.number()),
});

export const TeamSchema = z.object({
    id: z.number(),
    name: z.string(),
    players: z.array(z.number()),
    coachs: z.array(z.number()),
});