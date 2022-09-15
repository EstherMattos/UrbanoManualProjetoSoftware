package Servicos;

import Interface.IResidenciaService;
import Models.Residencia;
import Repository.ResidenciaRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class ResidenciaServico extends BaseService<Residencia, Long> implements IResidenciaService {
    private ResidenciaRepository ResidenciaRepository;

    public ResidenciaServico(ResidenciaRepository ResidenciaRepository) {
        super(ResidenciaRepository);
    }

}
