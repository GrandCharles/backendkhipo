import { Request, Response } from 'express';
import { ManterLocalService } from '../../services/local/ManterLocalService';


export class ManterLocalController {

    async handleCriar(req: Request, res: Response) {
        const { idTipoLocal,
            nome, apelido,
            cnpj,
            cidade,
            uf,
            cep,
            endereco,
            complemento,
            email,
            telefone,
            entrada,
            catraca } = req.body;

        const manterLocalService = new ManterLocalService();

        const local = await manterLocalService.criar({
            idTipoLocal,
            nome,
            apelido,
            cnpj,
            cidade,
            uf,
            cep,
            endereco,
            complemento,
            email,
            telefone,
            entrada,
            catraca
        });

        return res.json(local);
    }

    async handleAlterar(req: Request, res: Response) {
        const id = req.query.id as string;
        const { idTipoLocal,
            nome,
            apelido,
            cnpj,
            cidade,
            uf, cep,
            endereco,
            complemento,
            email,
            telefone,
            entrada,
            catraca } = req.body;

        const manterLocalService = new ManterLocalService();

        const local = await manterLocalService.alterar({
            id,
            idTipoLocal,
            nome,
            apelido,
            cnpj,
            cidade,
            uf,
            cep,
            endereco,
            complemento,
            email,
            telefone,
            entrada,
            catraca
        });

        return res.json(local);
    }

    async handleExcluir(req: Request, res: Response) {
        const id = req.query.id as string;

        try {
            const manterLocalService = new ManterLocalService();

            const local = await manterLocalService.excluir(id);

            return res.json(local);
        } catch (err) {
            return res.status(400).destroy();
        }

    }

    async handleListar(req: Request, res: Response) {
        const manterLocalService = new ManterLocalService();

        const local = await manterLocalService.listar();

        return res.json(local);
    }

}
