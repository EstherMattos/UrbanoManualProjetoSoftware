import { Request, Response } from 'express';
import { prisma } from '../prismaClientSingleton';
import { generateReport } from '../services/reportGenerator';

export const ResidenciaController = {
  async create(request: Request, response: Response) {
    try {
      const residencia = request.body;

      const result = await prisma.residencia.create({
        data: {
          pessoaId: parseInt(residencia.pessoaId),
          endereco: residencia.endereco,
        },
      });
      return response.status(200).json(result);
    } catch (err) {
      console.log('Residencia creation failed: ' + err);
      return response.status(500).json({
        notification: 'Internal server error while trying to create Residencia',
      });
    }
  },
  async getById(request: Request, response: Response) {
    try {
      const { residencia_id } = request.params;
      const result = await prisma.residencia.findFirst({
        where: { id: parseInt(residencia_id) },
        include: { despesas: true },
      });
      return response.status(200).json(result);
    } catch (err) {
      console.log('Residencia getById failed: ' + err);
      return response.status(500).json({
        notification: 'Internal server error while trying to get Residencia',
      });
    }
  },
  async generateReport(request: Request, response: Response) {
    try {
      const { residencia_id } = request.params;
      const residenciaData = await prisma.residencia.findFirst({
        where: { id: parseInt(residencia_id) },
        include: { despesas: true },
      });
      const despesas = Object.values(residenciaData?.despesas!).map((c) =>
        Object.values(c)
      );
      await generateReport(residenciaData!.id, despesas);
      return response.status(200).json('result');
    } catch (err) {
      console.log('Residencia getById failed: ' + err);
      return response.status(500).json({
        notification: 'Internal server error while trying to get Residencia',
      });
    }
  },
  async update(request: Request, response: Response) {
    try {
      const { residencia_id } = request.params;
      const residencia = request.body;
      //   const result = await ResidenciaModel.updateById(residencia_id, residencia);

      return response.status(200).json('result');
    } catch (err) {
      console.log('Residencia update failed: ' + err);
      return response.status(500).json({
        notification: 'Internal server error while trying to update Residencia',
      });
    }
  },
  async delete(request: Request, response: Response) {
    try {
      const { residencia_id } = request.params;

      //   const result = await ResidenciaModel.deleteById(residencia_id);
      return response.status(200).json('result');
    } catch (err) {
      console.log('Residencia delete failed: ' + err);
      return response.status(500).json({
        notification: 'Internal server error while trying to delete Residencia',
      });
    }
  },
};
