import {
  deleteUser,
  getSavedPosts,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller";

import express from "express";
import { verifyToken } from "../middleware/verifyToken";

const router = express.Router();

router.get("/", getUsers);
router.get("/search/:id", verifyToken, getUser);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);
router.get("/saved", verifyToken, getSavedPosts);
/* router.get("/created", verifyToken, getCreatedPosts); */

export default router;
