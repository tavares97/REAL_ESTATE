import { Request, Response } from "express";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma";

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  //hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  //create user
  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      throw new Error("JWT_SECRET is not defined");
    }

    const token = jwt.sign({ id: user.id }, jwtSecret, {
      expiresIn: process.env.JWT_EXPIRES_IN || "1d",
    });

    const age = process.env.COOKIE_MAX_AGE
      ? parseInt(process.env.COOKIE_MAX_AGE)
      : 1000 * 60 * 60 * 24 * 7;

    const { password: _, ...userInfo } = user;

    res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: age,
        sameSite: process.env.NODE_ENV === "production" ? "strict" : "none",
        secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .json({ message: "Login successful", user: userInfo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error on login", error });
  }
};

export const logout = async (req: Request, res: Response) => {
  res.clearCookie("token").status(200).json({ message: "Logout successful" });
};
