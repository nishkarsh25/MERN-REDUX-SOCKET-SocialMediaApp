import express from 'express'
import { createPost, deletePost, getPost, getTimelinePosts, likePost, updatePost } from '../controllers/PostController.js'
import authMiddleWare from '../middleware/AuthMiddleware.js'




