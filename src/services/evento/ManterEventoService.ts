import prismaClient from '../../prisma';

interface ICreateEventoTypes {
    idTipoEvento: string;
    idLocal: string;
    nome: string;
    dataEvento: string;
    hora: string;
    email: string;
    telefone: string;
}

interface IUpdateEventoTypes {
    id: string;
    idTipoEvento: string;
    idLocal: string;
    nome: string;
    dataEvento: string;
    hora: string;
    email: string;
    telefone: string;
}

export class ManterEventoService {

    async criar({ idTipoEvento, idLocal, nome, dataEvento, hora, email, telefone }: ICreateEventoTypes) {
        // Obrigatório
        const msg = validaDados({ idTipoEvento, idLocal, nome, dataEvento, hora, email });
        if (msg != '') {
            throw new Error(`${msg}`);
        }

        const evento = await prismaClient.evento.create({
            data: {
                idTipoEvento: idTipoEvento,
                idLocal: idLocal,
                nome: nome,
                dataEvento: dataEvento,
                hora: hora,
                email: email,
                telefone: telefone,
            }
        });

        return evento;
    }

    async alterar({ id, idTipoEvento, idLocal, nome, dataEvento, hora, email, telefone }: IUpdateEventoTypes) {
        // Obrigatório
        const msg = validaDados({ idTipoEvento, idLocal, nome, dataEvento, hora, email });
        if (msg != '') {
            throw new Error(`${msg}`);
        }

        const evento = await prismaClient.evento.update({
            data: {
                idTipoEvento: idTipoEvento,
                idLocal: idLocal,
                nome: nome,
                dataEvento: dataEvento,
                hora: hora,
                email: email,
                telefone: telefone
            },
            where: {
                id: id
            }
        });

        return evento;
    }

    async excluir(id: string) {

        const evento = await prismaClient.evento.delete({
            where: {
                id: id
            },
        });

        return evento;
    }

    async listar() {
        const evento = await prismaClient.evento.findMany({
            include: {
                tipoEvento: {
                }
            },
            orderBy: {
                nome: 'asc'
            },

        });

        return evento;
    }

}
/*
                    select: {
                        nome: true,
                    },

                    include:{
                        local: true,
                    }


*/


function validaDados({ idTipoEvento, idLocal, nome, dataEvento, hora, email }) {
    let msg = '';

    // Obrigatórios
    if (!idTipoEvento) {
        msg = msg + "Tipo de Evento é Obrigatório - ";
    }
    if (!idLocal) {
        msg = msg + "Local do Evento é Obrigatório - ";
    }
    if (!nome) {
        msg = msg + "nome é Obrigatório - ";
    }
    if (!dataEvento) {
        msg = msg + "Data do evento é Obrigatória - ";
    }
    if (!hora) {
        msg = msg + "Hora do Evento é Obrigatória - ";
    }
    if (!email) {
        msg = msg + "Email é Obrigatório";
    }

    return msg;
};

