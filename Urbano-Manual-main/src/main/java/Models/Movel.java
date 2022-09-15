package Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
@Table(name = "movel")
public class Movel extends BaseEntity{

    @Column(nullable=false)
    private String Descricao;

    @Column(nullable=false)
    private String Quantidade;

    @JoinColumn(name = "comodo_id", insertable = false, updatable = false)
    @ManyToOne(targetEntity = Comodo.class, fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Comodo Comodo;

    @JoinColumn(name = "comodo_id")
    private Long comodo_id;

    public Long getId() {
        return super.getId();
    }

    public String getDescricao() {
        return Descricao;
    }

    public String getQuantidade() {
        return Quantidade;
    }

    @JsonIgnore
    public Models.Comodo getcomodo() {
        return Comodo;
    }
    public Long getComodoId(){
        return comodo_id;
    }

    public void setId(Long id) {
        super.setId(id);
    }

    public void setDescricao(String descricao) {
        Descricao = descricao;
    }

    public void setQuantidade(String quantidade) {
        Quantidade = quantidade;
    }

    public void setcomodoId(Long id){
        this.comodo_id = id;
    }
    @JsonIgnore
    public void setComodo(Models.Comodo comodo) {
        setcomodoId(Comodo.getId());
        this.Comodo = comodo;
    }
}
