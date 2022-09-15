package Servicos;

import Interface.IContaService;
import Models.Conta;
import Repository.ContaRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class ContaServico extends BaseService<Conta, Long> implements IContaService {
    private ContaRepository ContaRepository;

    public ContaServico(ContaRepository ContaRepository) {
        super(ContaRepository);
    }

}