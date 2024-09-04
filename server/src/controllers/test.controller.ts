import { Request, Response } from "express";

import jwt from "jsonwebtoken";

export const shouldBeLoggedIn = (req: Request, res: Response) => {
  console.log(req.userId);
  return res.status(200).json({ message: "Authorized" });
};

export const shouldBeAdmin = (req: Request, res: Response) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(
    token,
    process.env.JWT_SECRET || "",
    async (err: jwt.VerifyErrors | null, payload: any) => {
      if (err) {
        return res.status(401).json({ message: "Token is invalid" });
      }

      if (!payload.isAdmin) {
        return res.status(403).json({ message: "Forbidden!" });
      }
    }
  );
};
