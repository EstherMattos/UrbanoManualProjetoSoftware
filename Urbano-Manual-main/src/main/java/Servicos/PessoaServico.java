package Servicos;

import Interface.IPessoaService;
import Models.Pessoa;
import Repository.PessoaRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class PessoaServico extends BaseService<Pessoa,Long> implements IPessoaService {

    private PessoaRepository pessoaRepository;

    public PessoaServico(PessoaRepository pessoaRepository){ super(pessoaRepository);}
}
