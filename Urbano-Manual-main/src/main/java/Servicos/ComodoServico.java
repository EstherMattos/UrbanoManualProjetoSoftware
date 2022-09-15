package Servicos;

import Interface.IComodoService;
import Models.Comodo;
import Repository.ComodoRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class ComodoServico extends BaseService<Comodo, Long> implements IComodoService {
    private ComodoRepository ComodoRepository;

    public ComodoServico(ComodoRepository ComodoRepository) {
        super(ComodoRepository);
    }

}
