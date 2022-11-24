import { PessoaController } from "../controllers/pessoa"
import express from "express"

const pessoaRouter = express.Router()

pessoaRouter.post("/", PessoaController.create)

pessoaRouter.get("/:pessoa_id", PessoaController.getById)

pessoaRouter.put("/:pessoa_id", PessoaController.update)

pessoaRouter.delete("/:pessoa_id", PessoaController.delete)

export default pessoaRouter
