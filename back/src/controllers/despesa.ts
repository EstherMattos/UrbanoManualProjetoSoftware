import { Request, Response } from 'express';
import { prisma } from '../prismaClientSingleton';

export const DespesaController = {
  async create(request: Request, response: Response) {
    try {
      const despesa = request.body;

      const result = await prisma.despesa.create({
        data: {
          residenciaId: despesa.residenciaId,
          descricao: despesa.descricao,
          valor: despesa.valor,
          tipo: despesa.tipo,
        },
      });
      return response.status(200).json(result);
    } catch (err) {
      console.log('Despesa creation failed: ' + err);
      return response.status(500).json({
        notification: 'Internal server error while trying to create Despesa',
      });
    }
  },
  async getById(request: Request, response: Response) {
    try {
      const { despesa_id } = request.params;
      //   const result = await Despesa.getById(despesa_id)

      return response.status(200).json('result');
    } catch (err) {
      console.log('Despesa getById failed: ' + err);
      return response.status(500).json({
        notification: 'Internal server error while trying to get Despesa',
      });
    }
  },
  async update(request: Request, response: Response) {
    try {
      const { despesa_id } = request.params;
      const despesa = request.body;
      //   const result = await DespesaModel.updateById(despesa_id, despesa)

      return response.status(200).json('result');
    } catch (err) {
      console.log('Despesa update failed: ' + err);
      return response.status(500).json({
        notification: 'Internal server error while trying to update Despesa',
      });
    }
  },
  async delete(request: Request, response: Response) {
    try {
      const { despesa_id } = request.params;

      //   const result = await DespesaModel.deleteById(despesa_id)
      return response.status(200).json('result');
    } catch (err) {
      console.log('Despesa delete failed: ' + err);
      return response.status(500).json({
        notification: 'Internal server error while trying to delete Despesa',
      });
    }
  },
};
