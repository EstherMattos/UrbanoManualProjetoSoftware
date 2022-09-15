package Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
@Table(name = "renda")
public class Renda extends BaseEntity{

    @Column(nullable=false)
    private String Descricao;

    @Column(nullable=false)
    private double Valor;

    @JoinColumn(name = "pessoa_id")
    @ManyToOne(targetEntity = Pessoa.class, fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Pessoa Pessoa;

    @JsonInclude()
    @Transient
    private Long pessoaId;

    public Long getId() {
        return super.getId();
    }

    public String getDescricao() {
        return Descricao;
    }

    public double getValor() {
        return Valor;
    }
    @JsonIgnore
    public Models.Pessoa getPessoa() {
        return Pessoa;
    }

    public Long getPessoaID() {
        return pessoaId;
    }

    public void setId(Long id) {
        super.setId(id);
    }

    public void setDescricao(String descricao) {
        Descricao = descricao;
    }

    public void setValor(double valor) {
        Valor = valor;
    }

    public void setPessoa(Models.Pessoa pessoa) {
        this.Pessoa = pessoa;
    }

    public void setPessoaId(Long num){
        this.pessoaId = num;
    }
}
