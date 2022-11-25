import { Request, Response } from "express"

export const EstoqueController = {
  async create(request: Request, response: Response) {
    try {
      const estoque = request.body

      //   const result = await EstoqueModel.create(estoque);
      return response.status(200).json("result")
    } catch (err) {
      console.log("Estoque creation failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to create Estoque",
      })
    }
  },
  async getById(request: Request, response: Response) {
    try {
      const { estoque_id } = request.params
      //   const result = await Estoque.getById(estoque_id);

      return response.status(200).json("result")
    } catch (err) {
      console.log("Estoque getById failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to get Estoque",
      })
    }
  },
  async update(request: Request, response: Response) {
    try {
      const { estoque_id } = request.params
      const estoque = request.body
      //   const result = await EstoqueModel.updateById(estoque_id, estoque);

      return response.status(200).json("result")
    } catch (err) {
      console.log("Estoque update failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to update Estoque",
      })
    }
  },
  async delete(request: Request, response: Response) {
    try {
      const { estoque_id } = request.params

      //   const result = await EstoqueModel.deleteById(estoque_id);
      return response.status(200).json("result")
    } catch (err) {
      console.log("Estoque delete failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to delete Estoque",
      })
    }
  },
}
