package Servicos;

import Interface.IEstoqueService;
import Models.Estoque;
import Repository.EstoqueRepository;
import org.springframework.stereotype.Service;

@Service
public class EstoqueServico extends BaseService<Estoque, Long> implements IEstoqueService {
    private EstoqueRepository EstoqueRepository;

    public EstoqueServico(EstoqueRepository EstoqueRepository) {
        super(EstoqueRepository);
    }

}