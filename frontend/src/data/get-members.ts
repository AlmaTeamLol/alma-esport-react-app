import * as z from "zod";

import members from "@/assets/json/members.json";
import { memberSchema } from "@/schemas/member";
import type { IMember } from "@/types/types";

export default function getMembers(): IMember[] {
    return members.members
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
}