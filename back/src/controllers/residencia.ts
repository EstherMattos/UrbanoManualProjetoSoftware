import { Request, Response } from 'express';
import { generateReport } from '../services/reportGenerator';
import ResidenciaRepository from '../repository/residencia';
export const ResidenciaController = {
  async create(request: Request, response: Response) {
    try {
      const residencia = request.body;

      const result = await ResidenciaRepository.createResidencia(residencia);

      return response.status(200).json(result);
    } catch (err) {
      console.log('Residencia creation failed: ' + err);
      return response.status(500).json({
        notification: 'Internal server error while trying to create Residencia',
        error: err,
      });
    }
  },
  async getById(request: Request, response: Response) {
    try {
      const { residencia_id } = request.params;
      const result = ResidenciaRepository.getResidenciaById(
        parseInt(residencia_id),
        false
      );
      return response.status(200).json(result);
    } catch (err) {
      console.log('Residencia getById failed: ' + err);
      return response.status(500).json({
        notification: 'Internal server error while trying to get Residencia',
        error: err,
      });
    }
  },
  async generateReport(request: Request, response: Response) {
    try {
      const { residencia_id } = request.params;
      const residenciaData = await ResidenciaRepository.getResidenciaById(
        parseInt(residencia_id),
        true
      );
      const despesas = Object.values(residenciaData?.despesas!).map((c) =>
        Object.values(c)
      );
      await generateReport(residenciaData!.id, despesas);
      return response.status(200).json('result');
    } catch (err) {
      console.log('Residencia getById failed: ' + err);
      return response.status(500).json({
        notification: 'Internal server error while trying to get Residencia',
        error: err,
      });
    }
  },
  async update(request: Request, response: Response) {
    try {
      const { residencia_id } = request.params;
      const residencia = request.body;

      const result = await ResidenciaRepository.updateResidencia(
        parseInt(residencia_id),
        residencia
      );

      return response.status(200).json(result);
    } catch (err) {
      console.log('Residencia update failed: ' + err);
      return response.status(500).json({
        notification: 'Internal server error while trying to update Residencia',
        error: err,
      });
    }
  },
  async delete(request: Request, response: Response) {
    try {
      const { residencia_id } = request.params;

      const result = await ResidenciaRepository.deleteResidencia(
        parseInt(residencia_id)
      );

      return response.status(200).json(result);
    } catch (err) {
      console.log('Residencia delete failed: ' + err);
      return response.status(500).json({
        notification: 'Internal server error while trying to delete Residencia',
        error: err,
      });
    }
  },
};
