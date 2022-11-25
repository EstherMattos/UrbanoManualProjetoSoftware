import { Request, Response } from "express"

export const ContaController = {
  async create(request: Request, response: Response) {
    try {
      const conta = request.body

      //   const result = await ContaModel.create(conta)
      return response.status(200).json("result")
    } catch (err) {
      console.log("Conta creation failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to create Conta",
      })
    }
  },
  async getById(request: Request, response: Response) {
    try {
      const { conta_id } = request.params
      //   const result = await Conta.getById(conta_id)

      return response.status(200).json("result")
    } catch (err) {
      console.log("Conta getById failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to get Conta",
      })
    }
  },
  async update(request: Request, response: Response) {
    try {
      const { conta_id } = request.params
      const conta = request.body
      //   const result = await ContaModel.updateById(conta_id, conta)

      return response.status(200).json("result")
    } catch (err) {
      console.log("Conta update failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to update Conta",
      })
    }
  },
  async delete(request: Request, response: Response) {
    try {
      const { conta_id } = request.params

      //   const result = await ContaModel.deleteById(conta_id)
      return response.status(200).json("result")
    } catch (err) {
      console.log("Conta delete failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to delete Conta",
      })
    }
  },
}
