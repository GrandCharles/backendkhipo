import prismaClient from '../../prisma';

interface ICreateLocalTypes {
    idTipoLocal: string;
    nome: string;
    apelido: string;
    cnpj: string;
    cidade: string;
    uf: string;
    cep: string;
    endereco: string;
    complemento: string;
    email: string;
    telefone: string;
    entrada: string[];
    catraca: string[];
}

interface IUpdateLocalTypes {
    id: string;
    idTipoLocal: string;
    nome: string;
    apelido: string;
    cnpj: string;
    cidade: string;
    uf: string;
    cep: string;
    endereco: string;
    complemento: string;
    email: string;
    telefone: string;
    entrada: string[];
    catraca: string[];
}

export class ManterLocalService {

    async criar({ idTipoLocal, nome, apelido, cnpj, cidade, uf, cep, endereco, complemento, email, telefone, entrada, catraca }: ICreateLocalTypes) {
        // Obrigatório
        const msg = validaDados({ idTipoLocal, nome, cidade, uf, cep, endereco, email });
        if (msg != '') {
            throw new Error(`${msg}`);
        }

        const local = await prismaClient.local.create({
            data: {
                idTipoLocal: idTipoLocal,
                nome: nome,
                apelido: apelido,
                cnpj: cnpj,
                cidade: cidade,
                uf: uf,
                cep: cep,
                endereco: endereco,
                complemento: complemento,
                email: email,
                telefone: telefone,
                entrada: entrada,
                catraca: catraca,
            }
        });

        return local;
    }

    async alterar({ id, idTipoLocal, nome, apelido, cnpj, cidade, uf, cep, endereco, complemento, email, telefone, entrada, catraca }: IUpdateLocalTypes) {
        // Obrigatório
        const msg = validaDados({ idTipoLocal, nome, cidade, uf, cep, endereco, email });
        if (msg != '') {
            throw new Error(`${msg}`);
        }

        const local = await prismaClient.local.update({
            data: {
                idTipoLocal: idTipoLocal,
                nome: nome,
                apelido: apelido,
                cnpj: cnpj,
                cidade: cidade,
                uf: uf,
                cep: cep,
                endereco: endereco,
                complemento: complemento,
                email: email,
                telefone: telefone,
                entrada: entrada,
                catraca: catraca,
            },
            where: {
                id: id
            }
        });

        return local;
    }

    async excluir(id: string) {

        const local = await prismaClient.local.delete({
            where: {
                id: id
            },
        });

        return local;
    }

    async listar() {
        const local = await prismaClient.local.findMany({
            include: {
                tipoLocal: {
                    select: {
                        nome: true,
                    },
                }
            },
            orderBy: {
                nome: 'asc'
            },
            
        });

        return local;
    }

}

function validaDados({ idTipoLocal, nome, cidade, uf, cep, endereco, email }) {
    let msg = '';

    // Obrigatórios
    if (!idTipoLocal) {
        msg = msg + "Tipo de Local é Obrigatório - ";
    }
    if (!nome) {
        msg = msg + "nome é Obrigatório - ";
    }
    if (!cidade) {
        msg = msg + "Cidade é Obrigatória - ";
    }
    if (!uf) {
        msg = msg + "Unidade Federativa é Obrigatória - ";
    }
    if (!cep) {
        msg = msg + "CEP é Obrigatório - ";
    }
    if (!endereco) {
        msg = msg + "Endereço é Obrigatório - ";
    }
    if (!email) {
        msg = msg + "Email é Obrigatório";
    }

    return msg;
};

