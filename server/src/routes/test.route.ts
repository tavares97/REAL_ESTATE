import {
  shouldBeAdmin,
  shouldBeLoggedIn,
} from "../controllers/test.controller";

import express from "express";
import { verifyToken } from "../middleware/verifyToken";

const router = express.Router();

router.get("/should-be-logged-in", verifyToken, shouldBeLoggedIn);

router.get("/should-be-admin", shouldBeAdmin);

export default router;
