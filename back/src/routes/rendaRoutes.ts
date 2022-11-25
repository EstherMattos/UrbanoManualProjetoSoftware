import { RendaController } from "../controllers/renda"
import express from "express"

const rendaRouter = express.Router()

rendaRouter.post("/", RendaController.create)

rendaRouter.get("/:renda_id", RendaController.getById)

rendaRouter.put("/:renda_id", RendaController.update)

rendaRouter.delete("/:renda_id", RendaController.delete)

export default rendaRouter
