import { Request, Response } from "express"

export const ProdutoController = {
  async create(request: Request, response: Response) {
    try {
      const produto = request.body

      //   const result = await ProdutoModel.create(produto);
      return response.status(200).json("result")
    } catch (err) {
      console.log("Produto creation failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to create Produto",
      })
    }
  },
  async getById(request: Request, response: Response) {
    try {
      const { produto_id } = request.params
      //   const result = await Produto.getById(produto_id);

      return response.status(200).json("result")
    } catch (err) {
      console.log("Produto getById failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to get Produto",
      })
    }
  },
  async update(request: Request, response: Response) {
    try {
      const { produto_id } = request.params
      const produto = request.body
      //   const result = await ProdutoModel.updateById(produto_id, produto);

      return response.status(200).json("result")
    } catch (err) {
      console.log("Produto update failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to update Produto",
      })
    }
  },
  async delete(request: Request, response: Response) {
    try {
      const { produto_id } = request.params

      //   const result = await ProdutoModel.deleteById(produto_id);
      return response.status(200).json("result")
    } catch (err) {
      console.log("Produto delete failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to delete Produto",
      })
    }
  },
}
