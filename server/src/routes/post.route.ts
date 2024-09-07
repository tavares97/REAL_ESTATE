import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  savePost,
  updatePost,
} from "../controllers/post.controller";

import express from "express";
import { verifyToken } from "../middleware/verifyToken";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPostById);
router.post("/", verifyToken, createPost);
router.put("/:id", verifyToken, updatePost);
router.delete("/:id", verifyToken, deletePost);
router.post("/save", verifyToken, savePost);

export default router;
