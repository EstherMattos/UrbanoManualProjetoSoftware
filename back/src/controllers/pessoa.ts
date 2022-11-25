import { Request, Response } from "express"

export const PessoaController = {
  async create(request: Request, response: Response) {
    try {
      const pessoa = request.body

      //   const result = await PessoaModel.create(pessoa);
      return response.status(200).json("result")
    } catch (err) {
      console.log("Pessoa creation failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to create Pessoa",
      })
    }
  },
  async getById(request: Request, response: Response) {
    try {
      const { pessoa_id } = request.params
      //   const result = await Pessoa.getById(pessoa_id);

      return response.status(200).json("result")
    } catch (err) {
      console.log("Pessoa getById failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to get Pessoa",
      })
    }
  },
  async update(request: Request, response: Response) {
    try {
      const { pessoa_id } = request.params
      const pessoa = request.body
      //   const result = await PessoaModel.updateById(pessoa_id, pessoa);

      return response.status(200).json("result")
    } catch (err) {
      console.log("Pessoa update failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to update Pessoa",
      })
    }
  },
  async delete(request: Request, response: Response) {
    try {
      const { pessoa_id } = request.params

      //   const result = await PessoaModel.deleteById(pessoa_id);
      return response.status(200).json("result")
    } catch (err) {
      console.log("Pessoa delete failed: " + err)
      return response.status(500).json({
        notification: "Internal server error while trying to delete Pessoa",
      })
    }
  },
}
