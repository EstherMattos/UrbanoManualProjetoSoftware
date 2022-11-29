-- CreateTable
CREATE TABLE "Comodo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tamanho" TEXT NOT NULL,
    "limpeza" TEXT NOT NULL,
    "classificacaoMovel" TEXT NOT NULL,
    "residenciaId" INTEGER NOT NULL,
    CONSTRAINT "Comodo_residenciaId_fkey" FOREIGN KEY ("residenciaId") REFERENCES "Residencia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Conta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" INTEGER NOT NULL,
    "residenciaId" INTEGER NOT NULL,
    CONSTRAINT "Conta_residenciaId_fkey" FOREIGN KEY ("residenciaId") REFERENCES "Residencia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Estoque" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "residenciaId" INTEGER NOT NULL,
    CONSTRAINT "Estoque_residenciaId_fkey" FOREIGN KEY ("residenciaId") REFERENCES "Residencia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Movel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL,
    "comodoId" INTEGER NOT NULL,
    CONSTRAINT "Movel_comodoId_fkey" FOREIGN KEY ("comodoId") REFERENCES "Comodo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pessoa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "mensagem" TEXT NOT NULL,
    "dataPublicacao" DATETIME NOT NULL,
    "nome" TEXT NOT NULL,
    "pessoaId" INTEGER NOT NULL,
    CONSTRAINT "Post_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "Pessoa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "estoqueId" INTEGER NOT NULL,
    CONSTRAINT "Produto_estoqueId_fkey" FOREIGN KEY ("estoqueId") REFERENCES "Estoque" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Renda" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL,
    "valor" INTEGER NOT NULL,
    "pessoaId" INTEGER NOT NULL,
    CONSTRAINT "Renda_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "Pessoa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Residencia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "endereco" TEXT NOT NULL,
    "pessoaId" INTEGER NOT NULL,
    CONSTRAINT "Residencia_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "Pessoa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Estoque_residenciaId_key" ON "Estoque"("residenciaId");
