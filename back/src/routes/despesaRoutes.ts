import { DespesaController } from '../controllers/despesa';
import express from 'express';

const despesaRouter = express.Router();

despesaRouter.post('/', DespesaController.create);

despesaRouter.get('/:despesa_id', DespesaController.getById);

despesaRouter.put('/:despesa_id', DespesaController.update);

despesaRouter.delete('/:despesa_id', DespesaController.delete);

export default despesaRouter;
