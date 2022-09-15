package Interface;

import Models.BaseEntity;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

public interface IService<T extends BaseEntity, ID extends Serializable>{

    public abstract List<T> findAll();
    public abstract Optional<T> findById(ID entityId);
    public abstract T save(T entity);
    public abstract T update(T entity, ID entityId);
    public abstract void delete(ID entityId);
}
