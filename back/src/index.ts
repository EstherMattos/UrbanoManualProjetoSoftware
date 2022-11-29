import comodoRouter from './routes/comodoRoutes';
import despesaRouter from './routes/despesaRoutes';
import estoqueRouter from './routes/estoqueRoutes';
import movelRouter from './routes/movelRoutes';
import express from 'express';
import pessoaRouter from './routes/pessoaRoutes';
import postRouter from './routes/postRoutes';
import produtoRouter from './routes/produtoRoutes';
import rendaRouter from './routes/rendaRoutes';
import residenciaRouter from './routes/residenciaRoutes';
import bodyParser from 'body-parser';

const server = express();
server.use(bodyParser.json());

const port = 3000;

server.use('/comodo', comodoRouter);
server.use('/despesa', despesaRouter);
server.use('/estoque', estoqueRouter);
server.use('/movel', movelRouter);
server.use('/pessoa', pessoaRouter);
server.use('/post', postRouter);
server.use('/produto', produtoRouter);
server.use('/renda', rendaRouter);
server.use('/residencia', residenciaRouter);

server.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
