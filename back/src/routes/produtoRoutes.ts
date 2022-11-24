import { ProdutoController } from "../controllers/produto"
import express from "express"

const produtoRouter = express.Router()

produtoRouter.post("/", ProdutoController.create)

produtoRouter.get("/:produto_id", ProdutoController.getById)

produtoRouter.put("/:produto_id", ProdutoController.update)

produtoRouter.delete("/:produto_id", ProdutoController.delete)

export default produtoRouter
