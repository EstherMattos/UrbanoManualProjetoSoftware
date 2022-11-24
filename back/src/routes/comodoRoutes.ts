import { ComodoController } from "../controllers/comodo"
import express from "express"

const comodoRouter = express.Router()

comodoRouter.post("/", ComodoController.create)

comodoRouter.get("/:comodo_id", ComodoController.getById)

comodoRouter.put("/:comodo_id", ComodoController.update)

comodoRouter.delete("/:comodo_id", ComodoController.delete)

export default comodoRouter
