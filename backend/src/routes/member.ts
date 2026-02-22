import { Router } from "express";
import {
    createMember,
    deleteMember,
    getMemberById,
    getMembers,
    updateMember
} from "@backend/controllers/member.js";

const router = Router();

router.get("/", getMembers);
router.get("/:id", getMemberById);
router.post("/", createMember);
router.put("/:id", updateMember);
router.delete("/:id", deleteMember);

export default router;