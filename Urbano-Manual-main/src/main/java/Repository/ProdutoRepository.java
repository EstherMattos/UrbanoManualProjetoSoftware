package Repository;

import Models.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

@org.springframework.stereotype.Repository
public interface ProdutoRepository extends BaseRepository<Produto, Long> {
}
