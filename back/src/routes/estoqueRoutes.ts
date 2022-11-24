import express from "express"
import { EstoqueController } from "../controllers/estoque"

const estoqueRouter = express.Router()

estoqueRouter.post("/", EstoqueController.create)

estoqueRouter.get("/:estoque_id", EstoqueController.getById)

estoqueRouter.put("/:estoque_id", EstoqueController.update)

estoqueRouter.delete("/:estoque_id", EstoqueController.delete)

export default estoqueRouter
