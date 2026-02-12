import * as z from "zod";

const laneSchema = z.enum(['Top', 'Jungle', 'Mid', 'Adc', 'Support']);

const riotIdRegex = /[\p{L}\p{M}\s-]{3,16}#[a-zA-Z0-9]{3,5}/gu;
const riodIdSchema = z.string().regex(riotIdRegex);

const roleSchema = z.enum(['Capitaine', 'Coach', 'Joueur']);
const statusSchema = z.enum(['Lock', 'Sub', 'Tryout', 'Out']);

const memberSchema = z.object({
    id: z.number(),
    name: z.string(),
    riotId: riodIdSchema,
    role: z.array(roleSchema).min(1),
    lane: laneSchema,
    status: statusSchema,
    team: z.string(),
});

export { memberSchema, laneSchema, riodIdSchema, roleSchema, statusSchema };