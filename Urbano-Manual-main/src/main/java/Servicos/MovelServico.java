package Servicos;

import Interface.IMovelService;
import Models.Movel;
import Repository.MovelRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class MovelServico extends BaseService<Movel,Long> implements IMovelService {

    private MovelRepository movelRepository;

    public MovelServico(MovelRepository movelRepository){ super(movelRepository); }
}
