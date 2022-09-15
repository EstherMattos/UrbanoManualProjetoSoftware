package Servicos;

import Interface.IRendaService;
import Models.Renda;
import Repository.RendaRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class RendaServico extends BaseService<Renda, Long> implements IRendaService {

    private RendaRepository RendaRepository;

    public RendaServico(RendaRepository RendaRepository) {
        super(RendaRepository);
    }
}
