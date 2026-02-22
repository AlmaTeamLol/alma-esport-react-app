import { Request, Response } from "express";
import { TeamModel } from "@database/model/index.js";

export const getTeams = async (req: Request, res: Response) => {
    const teams = await TeamModel.find();
    return res.json(teams);
};

export const getTeamById = async (req: Request, res: Response) => {
    const team = await TeamModel.findById(req.params.id);

    if (!team) {
        return res.status(404).json({ message: "Team not found" });
    }

    return res.json(team);
};

export const createTeam = async (req: Request, res: Response) => {
    const team = await TeamModel.create(req.body);

    return res.status(201).json(team);
};

export const updateTeam = async (req: Request, res: Response) => {
    const team = await TeamModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!team) {
        return res.status(404).json({ message: "Team not found" });
    }

    return res.json(team);
};

export const deleteTeam = async (req: Request, res: Response) => {
    const team = await TeamModel.findByIdAndDelete(req.params.id);

    if (!team) {
        return res.status(404).json({ message: "Team not found" });
    }

    return res.status(204).send();
};
