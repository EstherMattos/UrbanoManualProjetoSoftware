package Repository;

import Models.Pessoa;
import org.springframework.stereotype.Repository;

@Repository
public interface PessoaRepository extends BaseRepository<Pessoa, Long> {
}
