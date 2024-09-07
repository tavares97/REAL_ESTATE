import { PostType, PropertyType } from "@prisma/client";
import { Request, Response } from "express";

import prisma from "../lib/prisma";

export const getPosts = async (req: Request, res: Response) => {
  const query = req.query;

  try {
    const posts = await prisma.post.findMany({
      where: {
        city: (query.city as string) || undefined,
        type: ((query.type as string).toUpperCase() as PostType) || undefined,
      },
    });

    if (!posts) {
      return res.status(404).json({ message: "No posts found" });
    }

    res.status(200).json({ posts });
  } catch (error) {
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

    res.status(200).json({ post });
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
