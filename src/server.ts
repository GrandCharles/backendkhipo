import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import  swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import path from 'path';  
import { router } from './routes';
import swaggerDocs from "./swagger.json"

const app = express();
const port = process.env.PORT ?? 3333;

app.use(express.json());
app.use(cors());
app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Trativa de erros
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        // Se for uma instancia do tipo Erro
        return res.status(400).json({
            error: err.message
        });
    }
    
    return res.status(500).json({
        status: 'error',
        message: '*** Internal Server Error! ***'
    });
});

app.listen(port, () => {
    console.log('Servidor Online na porta:', port);
});
