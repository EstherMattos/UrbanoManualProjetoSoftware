import { Request, Response } from "express"

export const RendaController = {
  async create(request: Request, response: Response) {
    try {
      const renda = request.body

      //   const result = await RendaModel.create(renda);
      return response.status(200).json("result")
    } catch (err) {
      console.log("Renda creation failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to create Renda",
      })
    }
  },
  async getById(request: Request, response: Response) {
    try {
      const { renda_id } = request.params
      //   const result = await Renda.getById(renda_id);

      return response.status(200).json("result")
    } catch (err) {
      console.log("Renda getById failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to get Renda",
      })
    }
  },
  async update(request: Request, response: Response) {
    try {
      const { renda_id } = request.params
      const renda = request.body
      //   const result = await RendaModel.updateById(renda_id, renda);

      return response.status(200).json("result")
    } catch (err) {
      console.log("Renda update failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to update Renda",
      })
    }
  },
  async delete(request: Request, response: Response) {
    try {
      const { renda_id } = request.params

      //   const result = await RendaModel.deleteById(renda_id);
      return response.status(200).json("result")
    } catch (err) {
      console.log("Renda delete failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to delete Renda",
      })
    }
  },
}
