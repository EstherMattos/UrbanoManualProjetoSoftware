import { Request, Response } from "express"

export const ResidenciaController = {
  async create(request: Request, response: Response) {
    try {
      const residencia = request.body

      //   const result = await ResidenciaModel.create(residencia);
      return response.status(200).json("result")
    } catch (err) {
      console.log("Residencia creation failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to create Residencia",
      })
    }
  },
  async getById(request: Request, response: Response) {
    try {
      const { residencia_id } = request.params
      //   const result = await Residencia.getById(residencia_id);

      return response.status(200).json("result")
    } catch (err) {
      console.log("Residencia getById failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to get Residencia",
      })
    }
  },
  async update(request: Request, response: Response) {
    try {
      const { residencia_id } = request.params
      const residencia = request.body
      //   const result = await ResidenciaModel.updateById(residencia_id, residencia);

      return response.status(200).json("result")
    } catch (err) {
      console.log("Residencia update failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to update Residencia",
      })
    }
  },
  async delete(request: Request, response: Response) {
    try {
      const { residencia_id } = request.params

      //   const result = await ResidenciaModel.deleteById(residencia_id);
      return response.status(200).json("result")
    } catch (err) {
      console.log("Residencia delete failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to delete Residencia",
      })
    }
  },
}
