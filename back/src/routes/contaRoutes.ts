import { ContaController } from "../controllers/conta"
import express from "express"

const contaRouter = express.Router()

contaRouter.post("/", ContaController.create)

contaRouter.get("/:conta_id", ContaController.getById)

contaRouter.put("/:conta_id", ContaController.update)

contaRouter.delete("/:conta_id", ContaController.delete)

export default contaRouter
