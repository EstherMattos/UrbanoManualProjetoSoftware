import { prisma } from '../prismaClientSingleton';

interface SaveResidencia {
  pessoaId: number;
  endereco: string;
}

class ResidenciaRepository {
  private constructor() {}

  static async createResidencia({ endereco, pessoaId }: SaveResidencia) {
    return await prisma.residencia.create({
      data: {
        endereco,
        pessoaId,
      },
    });
  }

  static async getResidenciaById(id: number, includeDespesas: boolean) {
    return await prisma.residencia.findFirst({
      where: { id },
      include: { despesas: includeDespesas },
    });
  }

  static async updateResidencia(
    residenciaId: number,
    residencia: SaveResidencia
  ) {
    return await prisma.residencia.update({
      where: { id: residenciaId },
      data: { endereco: residencia.endereco },
    });
  }

  static async deleteResidencia(residenciaId: number) {
    return await prisma.residencia.delete({
      where: { id: residenciaId },
    });
  }
}

export default ResidenciaRepository;
