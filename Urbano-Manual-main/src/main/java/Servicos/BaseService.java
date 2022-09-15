package Servicos;

import Interface.IService;
import Models.BaseEntity;
import Repository.BaseRepository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.transaction.Transactional;
import java.io.Serializable;
import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service
@Transactional
public abstract class BaseService<T extends BaseEntity, ID extends Serializable>
        implements IService<T, ID> {

    private BaseRepository<T, ID> abstractBaseRepository;

    @Autowired
    public BaseService(BaseRepository<T, ID> abstractBaseRepository) {
        this.abstractBaseRepository = abstractBaseRepository;
    }

    @Override
    public List<T> findAll() {
        return abstractBaseRepository.findAll();
    }

    @Override
    public Optional<T> findById(ID entityId) {
        return abstractBaseRepository.findById(entityId);
    }

    @Override
    public T save(T entity) {
        return (T) abstractBaseRepository.save(entity);
    }

    @Override
    public T update(T entity, ID entityId) {
        Optional<T> optional = abstractBaseRepository.findById(entityId);
        if(optional.isPresent()){
            return (T) abstractBaseRepository.save(entity);
        }else{
            return null;
        }
    }

    @Override
    public void delete(ID entityId) {
        abstractBaseRepository.deleteById(entityId);
    }

}
