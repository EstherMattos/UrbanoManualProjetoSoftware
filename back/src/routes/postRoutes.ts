import { PostController } from "../controllers/post"
import express from "express"

const postRouter = express.Router()

postRouter.post("/", PostController.create)

postRouter.get("/:post_id", PostController.getById)

postRouter.put("/:post_id", PostController.update)

postRouter.delete("/:post_id", PostController.delete)

export default postRouter
