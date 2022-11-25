import { ClassificacaoMovel, Rotas, TipoConta } from "src/enum/enum"

export interface Movel  {
    id?: number,
    comodoId?: number,
    descricao: String,
    quantidade: String
}

export interface Comodo {
    id?: number,
    classificacaoMovel: ClassificacaoMovel ,
    limpeza: String,
    moveis: Array<Movel>,
    residenciaId?: number,
    tamanho: String
}

export interface Conta {
    id?: number,
    descricao: String,
    residenciaId?: number,
    tipo: TipoConta,
    valor: number
}

export interface Renda {
    id?: number,
    descricao: String,
    pessoaId?: number,
    valor: number
}

export interface Produto {
    id?: number,
    estoqueId?: number,
    nome: String,
    valorUnitario: number
}

export interface Estoque {
    id?: number,
    produtos: Array<Produto>,
    residenciaId?: number
}

export interface Residencia {
    id?: number,
    comodos: Array<Comodo>,
    contas: Array<Conta>,
    endereco: String,
    estoque: Estoque,
    pessoaId?: number
}

export interface Pessoa {
    id?: number,
    cpf: String,
    idade: String,
    nome: String,
    rendas: Array<Renda>,
    residencias: Array<Residencia>,
    senha: String
}

export interface ItemMenu {
    Descricao: String,
    Link: Rotas
    Filhos?: Array<ItemMenu>
}

export interface Comentario {
    id: number,
    titulo: String,
    mensagem: String,
    dataPublicacao: String
    pessoaId: number,
    nome: String
}