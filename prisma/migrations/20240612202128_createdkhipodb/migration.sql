-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(40) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "senha" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tiposLocais" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(40) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tiposLocais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locais" (
    "id" TEXT NOT NULL,
    "idTipoLocal" TEXT NOT NULL,
    "nome" VARCHAR(40) NOT NULL,
    "apelido" VARCHAR(40),
    "cnpj" VARCHAR(14),
    "cidade" VARCHAR(30) NOT NULL,
    "uf" VARCHAR(2) NOT NULL,
    "cep" VARCHAR(8) NOT NULL,
    "endereco" VARCHAR(40) NOT NULL,
    "complemento" VARCHAR(40),
    "email" VARCHAR(40) NOT NULL,
    "telefone" VARCHAR(12) NOT NULL,
    "entrada" TEXT[],
    "catraca" TEXT[],
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "locais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tiposEventos" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(40) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tiposEventos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "eventos" (
    "id" TEXT NOT NULL,
    "idTipoEvento" TEXT NOT NULL,
    "idLocal" TEXT NOT NULL,
    "nome" VARCHAR(40) NOT NULL,
    "dataEvento" DATE NOT NULL,
    "hora" TIME NOT NULL,
    "email" VARCHAR(40) NOT NULL,
    "telefone" VARCHAR(40) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "eventos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "locais" ADD CONSTRAINT "locais_idTipoLocal_fkey" FOREIGN KEY ("idTipoLocal") REFERENCES "tiposLocais"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventos" ADD CONSTRAINT "eventos_idLocal_fkey" FOREIGN KEY ("idLocal") REFERENCES "locais"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "eventos" ADD CONSTRAINT "eventos_idTipoEvento_fkey" FOREIGN KEY ("idTipoEvento") REFERENCES "tiposEventos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
