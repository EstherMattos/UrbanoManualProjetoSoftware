import { prisma } from '../prismaClientSingleton';

interface SaveDespesa {
  descricao: string;
  valor: number;
  tipo: string;
  residenciaId: number;
}

class DespesaRepository {
  private constructor() {}

  static async createDespesa({
    descricao,
    residenciaId,
    tipo,
    valor,
  }: SaveDespesa) {
    return await prisma.despesa.create({
      data: { descricao, tipo, valor, residenciaId },
    });
  }

  static async getDespesaById(id: number) {
    return await prisma.despesa.findFirst({ where: { id } });
  }

  static async updateDespesa(despesaId: number, despesa: SaveDespesa) {
    return await prisma.despesa.update({
      where: { id: despesaId },
      data: despesa,
    });
  }

  static async deleteDespesa(despesaId: number) {
    return await prisma.despesa.delete({
      where: { id: despesaId },
    });
  }
}

export default DespesaRepository;
