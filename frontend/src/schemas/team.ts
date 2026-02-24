import * as z from "zod";

import { memberSchema } from "./member";

const teamSchema = z.object({
    id: z.number(),
    name: z.string(),
    get players() { return z.array(memberSchema); },
    get coachs() { return z.array(memberSchema); },
});

export { teamSchema };