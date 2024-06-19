import { Request, Response } from 'express';
import { ManterEventoService } from '../../services/evento/ManterEventoService';


export class ManterEventoController {

    async handleCriar(req: Request, res: Response) {
        const {
            idTipoEvento,
            idLocal,
            nome,
            dataEvento,
            hora,
            email,
            telefone,
        } = req.body;

        const manterEventoService = new ManterEventoService();

        const evento = await manterEventoService.criar({
            idTipoEvento,
            idLocal,
            nome,
            dataEvento,
            hora,
            email,
            telefone,
        });

        return res.json(evento);
    }

    async handleAlterar(req: Request, res: Response) {
        const id = req.query.id as string;
        const {
            idTipoEvento,
            idLocal,
            nome,
            dataEvento,
            hora,
            email,
            telefone,
        } = req.body;

        const manterEventoService = new ManterEventoService();

        const evento = await manterEventoService.alterar({
            id,
            idTipoEvento,
            idLocal,
            nome,
            dataEvento,
            hora,
            email,
            telefone,
        });

        return res.json(evento);
    }

    async handleExcluir(req: Request, res: Response) {
        const id = req.query.id as string;

        try {
            const manterEventoService = new ManterEventoService();

            const evento = await manterEventoService.excluir(id);

            return res.json(evento);
        } catch (err) {
            return res.status(400).destroy();
        }

    }

    async handleListar(req: Request, res: Response) {
        const manterEventoService = new ManterEventoService();

        const evento = await manterEventoService.listar();

        return res.json(evento);
    }

}
