import { Request, Response } from 'express';
import { prisma } from '../prismaClientSingleton';

export const PessoaController = {
  async create(request: Request, response: Response) {
    try {
      const pessoa = request.body;
      const result = await prisma.pessoa.create({ data: pessoa });
      return response.status(200).json(result);
    } catch (err) {
      console.log('Pessoa creation failed: ' + err);
      return response.status(500).json({
        notification: 'Internal server error while trying to create Pessoa',
      });
    }
  },
  async getById(request: Request, response: Response) {
    try {
      const { pessoa_id } = request.params;

      const result = await prisma.pessoa.findFirst({
        where: { id: parseInt(pessoa_id) },
      });
      return response.status(200).json(result);
    } catch (err) {
      console.log('Pessoa getById failed: ' + err);
      return response.status(500).json({
        notification: 'Internal server error while trying to get Pessoa',
      });
    }
  },
  async update(request: Request, response: Response) {
    try {
      const { pessoa_id } = request.params;
      const pessoa = request.body;

      const result = await prisma.pessoa.update({
        where: { id: parseInt(pessoa_id) },
        data: pessoa,
      });
      return response.status(200).json(result);
    } catch (err) {
      console.log('Pessoa update failed: ' + err);
      return response.status(500).json({
        notification: 'Internal server error while trying to update Pessoa',
      });
    }
  },
  async delete(request: Request, response: Response) {
    try {
      const { pessoa_id } = request.params;

      const result = await prisma.pessoa.delete({
        where: { id: parseInt(pessoa_id) },
      });
      return response.status(200).json(result);
    } catch (err) {
      console.log('Pessoa delete failed: ' + err);
      return response.status(500).json({
        notification: 'Internal server error while trying to delete Pessoa',
      });
    }
  },
};
