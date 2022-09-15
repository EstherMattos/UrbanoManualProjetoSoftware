package Repository;

import Models.Renda;
import org.springframework.data.jpa.repository.JpaRepository;

@org.springframework.stereotype.Repository
public interface RendaRepository extends BaseRepository<Renda, Long> {
}
