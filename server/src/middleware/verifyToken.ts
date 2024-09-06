import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET || "",
    (err: jwt.VerifyErrors | null, payload: any) => {
      if (err) {
        return res.status(401).json({ message: "Token is invalid" });
      }

      req.userId = payload.id;

      next();
    }
  );
};
