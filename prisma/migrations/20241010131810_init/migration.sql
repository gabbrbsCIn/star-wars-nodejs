-- CreateTable
CREATE TABLE "Planeta" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "clima" TEXT NOT NULL,
    "terreno" TEXT NOT NULL,
    "populacao" INTEGER,
    "sistemaEstelarId" INTEGER,

    CONSTRAINT "Planeta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SistemaEstelar" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,

    CONSTRAINT "SistemaEstelar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Personagem" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "raca" TEXT NOT NULL,
    "afiliacao" TEXT NOT NULL,
    "planetaNatalId" INTEGER,

    CONSTRAINT "Personagem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NaveEspacial" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "fabricante" TEXT NOT NULL,
    "capacidadePassageiros" INTEGER NOT NULL,
    "sistemaEstelarId" INTEGER,

    CONSTRAINT "NaveEspacial_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Planeta" ADD CONSTRAINT "Planeta_sistemaEstelarId_fkey" FOREIGN KEY ("sistemaEstelarId") REFERENCES "SistemaEstelar"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Personagem" ADD CONSTRAINT "Personagem_planetaNatalId_fkey" FOREIGN KEY ("planetaNatalId") REFERENCES "Planeta"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NaveEspacial" ADD CONSTRAINT "NaveEspacial_sistemaEstelarId_fkey" FOREIGN KEY ("sistemaEstelarId") REFERENCES "SistemaEstelar"("id") ON DELETE SET NULL ON UPDATE CASCADE;
