import { Request, Response } from "express";

import bcrypt from "bcrypt";
import prisma from "../lib/prisma";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();

    if (!users) {
      return res.status(404).json({ message: "No users found" });
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.params.id },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user", error });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const tokenUserId = req.userId;
  const { username, email, password, avatar } = req.body;

  if (tokenUserId !== req.params.id) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  let userData: any = {
    username,
    email,
  };

  if (avatar) {
    userData.avatar = avatar;
  }

  if (password && password.trim() !== "") {
    const hashedPassword = await bcrypt.hash(password, 10);

    userData.password = hashedPassword;
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { id: req.params.id },
      data: userData,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const { password: _, ...userInfo } = updatedUser;

    res.status(200).json(userInfo);
  } catch (error) {
    res.status(500).json({ message: "Error updating user", error });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const tokenUserId = req.userId;

  if (tokenUserId !== req.params.id) {
    return res.status(403).json({ message: "Unauthorized" });
  }

  try {
    await prisma.user.delete({
      where: { id: req.params.id },
    });

    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
};
