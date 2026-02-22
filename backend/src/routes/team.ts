import { Router } from "express";
import {
    createTeam,
    deleteTeam,
    getTeamById,
    getTeams,
    updateTeam
} from "@backend/controllers/team.js";

const router = Router();

router.get("/", getTeams);
router.get("/:id", getTeamById);
router.post("/", createTeam);
router.put("/:id", updateTeam);
router.delete("/:id", deleteTeam);

export default router;