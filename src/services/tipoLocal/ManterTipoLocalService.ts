import prismaClient from '../../prisma';

interface ITipoLocalTypes {
    nome: string;
}

interface ITipoLocalTypesUp {
    id: string;
    nome: string;
}

export class ManterTipoLocalService {

    async criar({ nome }: ITipoLocalTypes) {
        // Obrigatório
        if (nome === '') {
            throw new Error("Nome é Obrigatório");
        }

        const tipoLocal = await prismaClient.tipoLocal.create({
            data: {
                nome: nome
            }
        });

        return tipoLocal;
    }

    async alterar({ id, nome }: ITipoLocalTypesUp) {
        // Obrigatório
        if (nome === '') {
            throw new Error("Nome é Obrigatório");
        }

        const tipoLocal = await prismaClient.tipoLocal.update({
            data: {
                nome: nome
            },
            where: {
                id: id
            }
        });

        return tipoLocal;
    }

    async excluir(id: string) {

        const tipoLocal = await prismaClient.tipoLocal.delete({
            where: {
                id: id
            },
        });

        return tipoLocal;
    }
    
    async listar() {
        const tipoLocal = await prismaClient.tipoLocal.findMany({
            orderBy: {
                nome: 'asc'
            },
        });

        return tipoLocal;
    }

}


