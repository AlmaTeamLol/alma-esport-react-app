import { Schema } from "mongoose";
import { ITeam, IMember } from "@model/types/index.js";

export const MemberSchema = new Schema<IMember>({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    riotId: { type: String, required: true },
    role: { type: [String], required: true },
    lane: { type: String, required: true },
    status: { type: String, required: true },
    teams: { type: [{ type: Schema.Types.ObjectId, ref: "Team" }], required: true },
});

export const TeamSchema = new Schema<ITeam>({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    players: { type: [{ type: Schema.Types.ObjectId, ref: "Member" }], required: true },
    coachs: { type: [{ type: Schema.Types.ObjectId, ref: "Member" }], required: true },
});