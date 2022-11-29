import { Request, Response } from 'express';
import DespesaRepository from '../repository/despesa';

export const DespesaController = {
  async create(request: Request, response: Response) {
    try {
      const despesa = request.body;

      const result = await DespesaRepository.createDespesa(despesa);
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
      const result = await DespesaRepository.getDespesaById(
        parseInt(despesa_id)
      );
      return response.status(200).json(result);
    } catch (err) {
      console.log('Despesa getById failed: ' + err);
      return response.status(500).json({
        notification: 'Internal server error while trying to get Despesa',
        error: err,
      });
    }
  },
  async update(request: Request, response: Response) {
    try {
      const { despesa_id } = request.params;
      const despesa = request.body;
      const result = await DespesaRepository.updateDespesa(
        parseInt(despesa_id),
        despesa
      );
      return response.status(200).json(result);
    } catch (err) {
      console.log('Despesa update failed: ' + err);
      return response.status(500).json({
        notification: 'Internal server error while trying to update Despesa',
        error: err,
      });
    }
  },
  async delete(request: Request, response: Response) {
    try {
      const { despesa_id } = request.params;

      const result = await DespesaRepository.deleteDespesa(
        parseInt(despesa_id)
      );

      return response.status(200).json(result);
    } catch (err) {
      console.log('Despesa delete failed: ' + err);
      return response.status(500).json({
        notification: 'Internal server error while trying to delete Despesa',
        error: err,
      });
    }
  },
};
