package Servicos;

import Interface.IComodoService;
import Interface.IProdutoService;
import Models.Comodo;
import Models.Produto;
import Repository.ComodoRepository;
import Repository.ProdutoRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class ProdutoServico extends BaseService<Produto, Long> implements IProdutoService {

    private ProdutoRepository ProdutoRepository;

    public ProdutoServico(ProdutoRepository ProdutoRepository) {
        super(ProdutoRepository);
    }
}
