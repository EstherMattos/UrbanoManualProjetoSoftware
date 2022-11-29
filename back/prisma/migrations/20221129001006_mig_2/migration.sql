/*
  Warnings:

  - You are about to drop the `Conta` table. If the table is not empty, all the data it despesains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Conta";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Despesa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" INTEGER NOT NULL,
    "residenciaId" INTEGER NOT NULL,
    CONSTRAINT "Despesa_residenciaId_fkey" FOREIGN KEY ("residenciaId") REFERENCES "Residencia" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
