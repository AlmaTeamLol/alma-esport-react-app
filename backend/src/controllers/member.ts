import { Request, Response } from "express";
import { MemberModel } from "@database/model/index.js";

export const getMembers = async (req: Request, res: Response) => {
    const members = await MemberModel.find();
    res.json(members);
};

export const getMemberById = async (req: Request, res: Response) => {
    const member = await MemberModel.findById(req.params.id);

    if (!member) {
        return res.status(404).json({ message: "Member not found" });
    }

    return res.json(member);
};

export const createMember = async (req: Request, res: Response) => {
    const member = await MemberModel.create(req.body);

    return res.status(201).json(member);
};

export const updateMember = async (req: Request, res: Response) => {
    const member = await MemberModel.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!member) {
        return res.status(404).json({ message: "Member not found" });
    }

    return res.json(member);
};

export const deleteMember = async (req: Request, res: Response) => {
    const member = await MemberModel.findByIdAndDelete(req.params.id);

    if (!member) {
        return res.status(404).json({ message: "Member not found" });
    }

    return res.status(204).send();
};
