import { prisma } from '../prismaClientSingleton';

interface SavePessoa {
  cpf: string;
  idade: string;
  nome: string;
  senha: string;
}

class PessoaRepository {
  private constructor() {}

  static async createPessoa({ cpf, idade, nome, senha }: SavePessoa) {
    return await prisma.pessoa.create({ data: { cpf, idade, nome, senha } });
  }

  static async getPessoaById(id: number) {
    return await prisma.pessoa.findFirst({ where: { id } });
  }

  static async updatePessoa(pessoaId: number, pessoa: SavePessoa) {
    return await prisma.pessoa.update({
      where: { id: pessoaId },
      data: pessoa,
    });
  }

  static async deletePessoa(pessoaId: number) {
    return await prisma.pessoa.delete({
      where: { id: pessoaId },
    });
  }
}

export default PessoaRepository;
