import { Request, Response } from "express"

export const ComodoController = {
  async create(request: Request, response: Response) {
    try {
      const comodo = request.body

      //   const result = await ComodoModel.create(comodo);
      return response.status(200).json("result")
    } catch (err) {
      console.log("Comodo creation failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to create Comodo",
      })
    }
  },
  async getById(request: Request, response: Response) {
    try {
      const { comodo_id } = request.params
      //   const result = await Comodo.getById(comodo_id);

      return response.status(200).json("result")
    } catch (err) {
      console.log("Comodo getById failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to get Comodo",
      })
    }
  },
  async update(request: Request, response: Response) {
    try {
      const { comodo_id } = request.params
      const comodo = request.body
      //   const result = await ComodoModel.updateById(comodo_id, comodo);

      return response.status(200).json("result")
    } catch (err) {
      console.log("Comodo update failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to update Comodo",
      })
    }
  },
  async delete(request: Request, response: Response) {
    try {
      const { comodo_id } = request.params

      //   const result = await ComodoModel.deleteById(comodo_id);
      return response.status(200).json("result")
    } catch (err) {
      console.log("Comodo delete failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to delete Comodo",
      })
    }
  },
}
