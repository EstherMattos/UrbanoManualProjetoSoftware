package Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
@Table(name = "produto")
public class Produto extends BaseEntity {

    @Column(nullable=false)
    private String Nome;

    @Column(nullable=false)
    private double ValorUnitario;

    @JoinColumn(name = "estoque_id", insertable = false, updatable = false)
    @ManyToOne(targetEntity = Estoque.class, fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Estoque Estoque;

    @JoinColumn(name = "estoque_id")
    private Long estoque_id;

    public Long getId() {
        return super.getId();
    }

    public String getNome() {
        return Nome;
    }

    public double getValorUnitario() {
        return ValorUnitario;
    }

    @JsonIgnore
    public Models.Estoque getEstoque() {
        return Estoque;
    }
    public Long getEstoqueId(){
        return estoque_id;
    }

    public void setId(Long id) {
        super.setId(id);
    }

    public void setNome(String nome) {
        Nome = nome;
    }

    public void setValorUnitario(double valorUnitario) {
        ValorUnitario = valorUnitario;
    }

    public void setEstoqueId(Long id){
        this.estoque_id = id;
    }
    @JsonIgnore
    public void setEstoque(Models.Estoque estoque) {
        setEstoqueId(estoque.getId());
        this.Estoque = estoque;
    }
}