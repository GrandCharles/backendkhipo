import { Request, Response } from 'express';
import { ManterTipoEventoService } from '../../services/tipoEvento/ManterTipoEventoService';


export class ManterTipoEventoController {

    async handleCriar(req: Request, res: Response) {
        const { nome } = req.body;

        const manterTipoEventoService = new ManterTipoEventoService();

        const tipoEvento = await manterTipoEventoService.criar({ nome });

        return res.json(tipoEvento);
    }

    async handleAlterar(req: Request, res: Response) {
        const id = req.query.id as string;
        const { nome } = req.body;

        const manterTipoEventoService = new ManterTipoEventoService();

        const tipoEvento = await manterTipoEventoService.alterar(id, nome);

        return res.json(tipoEvento);
    }
    
    async handleExcluir(req: Request, res: Response) {
        const id = req.query.id as string;

        try {
            const manterTipoEventoService = new ManterTipoEventoService();

            const tipoEvento = await manterTipoEventoService.excluir(id);

            return res.json(tipoEvento);
        } catch (err) {
            return res.status(400).destroy();
        }

    }

    async handleListar(req: Request, res: Response) {
        const manterTipoEventoService = new ManterTipoEventoService();

        const tipoEvento = await manterTipoEventoService.listar();

        return res.json(tipoEvento);
    }

}
