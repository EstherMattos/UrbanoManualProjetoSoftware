import { ResidenciaController } from "../controllers/residencia"
import express from "express"

const residenciaRouter = express.Router()

residenciaRouter.post("/", ResidenciaController.create)

residenciaRouter.get("/:residencia_id", ResidenciaController.getById)

residenciaRouter.put("/:residencia_id", ResidenciaController.update)

residenciaRouter.delete("/:residencia_id", ResidenciaController.delete)

export default residenciaRouter
