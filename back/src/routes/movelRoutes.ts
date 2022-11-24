import express from "express"
import { MovelController } from "../controllers/movel"

const movelRouter = express.Router()

movelRouter.post("/", MovelController.create)

movelRouter.get("/:movel_id", MovelController.getById)

movelRouter.put("/:movel_id", MovelController.update)

movelRouter.delete("/:movel_id", MovelController.delete)

export default movelRouter
