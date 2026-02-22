import mongoose from "mongoose";

import { MemberSchema } from "@database/schema/index.js";
import { TeamSchema } from "@database/schema/index.js";

import { IMember } from "@model/types/index.js";
import { ITeam } from "@model/types/index.js";

export const TeamModel = mongoose.model<ITeam>("Team", TeamSchema);
export const MemberModel = mongoose.model<IMember>("Member", MemberSchema);