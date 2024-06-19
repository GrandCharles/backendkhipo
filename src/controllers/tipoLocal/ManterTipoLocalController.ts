import { Request, Response } from 'express';
import { ManterTipoLocalService } from '../../services/tipoLocal/ManterTipoLocalService';


export class ManterTipoLocalController {

    async handleCriar(req: Request, res: Response) {
        const { nome } = req.body;

        const manterTipoLocalService = new ManterTipoLocalService();

        const tipoLocal = await manterTipoLocalService.criar({ nome });

        return res.json(tipoLocal);
    }
    
    async handleAlterar(req: Request, res: Response) {
        const id = req.query.id as string;
        const { nome } = req.body;

        const manterTipoLocalService = new ManterTipoLocalService();

        const tipoLocal = await manterTipoLocalService.alterar({id, nome});

        return res.json(tipoLocal);
    }
    
    async handleExcluir(req: Request, res: Response) {
        const id = req.query.id as string;

        try {
            const manterTipoLocalService = new ManterTipoLocalService();

            const tipoLocal = await manterTipoLocalService.excluir(id);

            return res.json(tipoLocal);
        } catch (err) {
            return res.status(400).destroy();
        }

    }

    async handleListar(req: Request, res: Response) {
        const manterTipoLocalService = new ManterTipoLocalService();

        const tipoLocal = await manterTipoLocalService.listar();

        return res.json(tipoLocal);
    }

}
