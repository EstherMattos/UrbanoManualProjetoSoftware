import { Request, Response } from "express"

export const MovelController = {
  async create(request: Request, response: Response) {
    try {
      const movel = request.body

      //   const result = await MovelModel.create(movel)
      return response.status(200).json("result")
    } catch (err) {
      console.log("Movel creation failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to create Movel",
      })
    }
  },
  async getById(request: Request, response: Response) {
    try {
      const { movel_id } = request.params
      //   const result = await Movel.getById(movel_id)

      return response.status(200).json("result")
    } catch (err) {
      console.log("Movel getById failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to get Movel",
      })
    }
  },
  async update(request: Request, response: Response) {
    try {
      const { movel_id } = request.params
      const movel = request.body
      //   const result = await MovelModel.updateById(movel_id, movel)

      return response.status(200).json("result")
    } catch (err) {
      console.log("Movel update failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to update Movel",
      })
    }
  },
  async delete(request: Request, response: Response) {
    try {
      const { movel_id } = request.params

      //   const result = await MovelModel.deleteById(movel_id)
      return response.status(200).json("result")
    } catch (err) {
      console.log("Movel delete failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to delete Movel",
      })
    }
  },
}
