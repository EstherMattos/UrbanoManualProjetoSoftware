package Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.io.Serializable;
import java.util.List;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
@Table(name = "estoque")
public class Estoque extends BaseEntity{

    @OneToOne(mappedBy = "Estoque", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @PrimaryKeyJoinColumn
    private Residencia Residencia;

    @OneToMany(cascade = CascadeType.PERSIST , mappedBy="Estoque")
    private List<Produto> Produtos;

    public Long getId() {
        return super.getId();
    }

    @JsonIgnore
    public Models.Residencia getResidencia() {
        return Residencia;
    }

    public List<Produto> getProdutos() {
        return Produtos;
    }

    public void setId(Long id) {
        super.setId(id);
    }

    @JsonIgnore
    public void setResidencia(Models.Residencia residencia) {
        this.Residencia = residencia;
    }

    public void setProdutos(List<Produto> produtos) {
        Produtos = produtos;
    }
}
