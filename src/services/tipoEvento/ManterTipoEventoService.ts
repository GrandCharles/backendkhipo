import prismaClient from '../../prisma';

interface ITipoEventoTypes {
    nome: string;
}

export class ManterTipoEventoService {

    async criar({ nome }: ITipoEventoTypes) {
        // Obrigatório
        if (nome === '') {
            throw new Error("Nome é Obrigatório");
        }

        const tipoEvento = await prismaClient.tipoEvento.create({
            data: {
                nome: nome
            }
        });

        return tipoEvento;
    }

    async alterar(id: string, nome: string) {
        // Obrigatório
        if (nome === '') {
            throw new Error("Nome é Obrigatório");
        }

        const tipoEvento = await prismaClient.tipoEvento.update({
            data: {
                nome: nome
            },
            where: {
                id: id
            }
        });

        return tipoEvento;
    }

    async excluir(id: string) {

        const tipoEvento = await prismaClient.tipoEvento.delete({
            where: {
                id: id
            },
        });

        return tipoEvento;
    }
    
    async listar() {
        const tipoEvento = await prismaClient.tipoEvento.findMany({
            orderBy: {
                nome: 'asc'
            },
            /*
            select: {
                id: true,
                nome: true
            }
            */
        });

        return tipoEvento;
    }

}


