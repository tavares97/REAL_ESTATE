import { PostType, PropertyType } from "@prisma/client";
import { Request, Response } from "express";

import jwt from "jsonwebtoken";
import prisma from "../lib/prisma";

export const getPosts = async (req: Request, res: Response) => {
  const query = req.query;

  try {
    const where: any = {};

    if (Object.keys(query).length > 0) {
      where.type =
        ((query.type as string).toUpperCase() as PostType) || undefined;
      where.city = (query.city as string).toLowerCase() || undefined;
      where.price = {
        gte: parseInt(query.minPrice as string) || 0,
        lte: parseInt(query.maxPrice as string) || 1000000,
      };
      where.bedroom = parseInt(query.bedroom as string) || undefined;
    }

    if (query.property) {
      where.property =
        ((query.property as string).toUpperCase() as PropertyType) || undefined;
    }

    const posts = await prisma.post.findMany({ where });

    if (!posts) {
      return res.status(404).json({ message: "No posts found" });
    }

    res.status(200).json({ posts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error fetching posts", error });
  }
};

export const createPost = async (req: Request, res: Response) => {
  const userId = req.userId;

  try {
    const newPost = await prisma.post.create({
      data: {
        ...req.body.postData,
        userId,
        PostDetail: {
          create: req.body.postDetail,
        },
      },
    });

    res.status(201).json({ newPost });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating post", error });
  }
};

export const getPostById = async (req: Request, res: Response) => {
  const postId = req.params.id;
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  try {
    const post = await prisma.post.findUnique({
      where: { id: postId },
      include: {
        PostDetail: true,
        user: {
          select: {
            username: true,
            avatar: true,
          },
        },
      },
    });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (!token) {
      return res.status(200).json({ post, isSaved: false });
    }

    jwt.verify(
      token,
      process.env.JWT_SECRET as string,
      async (err, payload: any) => {
        if (err) {
          return res.status(403).json({ message: "Invalid token" });
        }

        const userId = payload.id;

        const savedPost = await prisma.savedPost.findUnique({
          where: {
            userId_postId: {
              userId: userId as string,
              postId: postId as string,
            },
          },
        });

        return res.status(200).json({ post, isSaved: !!savedPost });
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Error fetching post", error });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  const userId = req.userId;

  try {
    const post = await prisma.post.update({
      where: { id: req.params.id },
      data: req.body,
    });

    if (post.userId !== userId) {
      return res.status(403).json({ message: "Unauthorized " });
    }

    res.status(200).json({ post });
  } catch (error) {
    res.status(500).json({ message: "Error updating post", error });
  }
};

export const savePost = async (req: Request, res: Response) => {
  const userId = req.userId;
  const postId = req.body.postId;

  try {
    const post = await prisma.savedPost.findUnique({
      where: {
        userId_postId: {
          userId: userId as string,
          postId: postId as string,
        },
      },
    });

    if (post) {
      await prisma.savedPost.delete({
        where: {
          id: post.id,
        },
      });

      res.status(200).json({ message: "Post unsaved successfully" });
    } else {
      await prisma.savedPost.create({
        data: {
          userId: userId as string,
          postId: postId as string,
        },
      });
      res.status(200).json({ message: "Post saved successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error saving post", error });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  const userId = req.userId;

  try {
    const post = await prisma.post.delete({
      where: { id: req.params.id },
    });

    if (post.userId !== userId) {
      return res.status(403).json({ message: "Unauthorized " });
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting post", error });
  }
};
