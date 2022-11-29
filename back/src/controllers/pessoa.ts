import { Request, Response } from 'express';

import PessoaRepository from '../repository/pessoa';

export const PessoaController = {
  async create(request: Request, response: Response) {
    try {
      const pessoa = request.body;
      const result = await PessoaRepository.createPessoa(pessoa);
      return response.status(200).json(result);
    } catch (err) {
      console.log('Pessoa creation failed: ' + err);
      return response.status(500).json({
        notification: 'Internal server error while trying to create Pessoa',
        error: err,
      });
    }
  },
  async getById(request: Request, response: Response) {
    try {
      const { pessoa_id } = request.params;

      const result = await PessoaRepository.getPessoaById(parseInt(pessoa_id));
      return response.status(200).json(result);
    } catch (err) {
      console.log('Pessoa getById failed: ' + err);
      return response.status(500).json({
        notification: 'Internal server error while trying to get Pessoa',
        error: err,
      });
    }
  },
  async update(request: Request, response: Response) {
    try {
      const { pessoa_id } = request.params;
      const pessoa = request.body;

      const result = PessoaRepository.updatePessoa(parseInt(pessoa_id), pessoa);
      return response.status(200).json(result);
    } catch (err) {
      console.log('Pessoa update failed: ' + err);
      return response.status(500).json({
        notification: 'Internal server error while trying to update Pessoa',
        error: err,
      });
    }
  },
  async delete(request: Request, response: Response) {
    try {
      const { pessoa_id } = request.params;

      const result = PessoaRepository.deletePessoa(parseInt(pessoa_id));
      return response.status(200).json(result);
    } catch (err) {
      console.log('Pessoa delete failed: ' + err);
      return response.status(500).json({
        notification: 'Internal server error while trying to delete Pessoa',
        error: err,
      });
    }
  },
};
