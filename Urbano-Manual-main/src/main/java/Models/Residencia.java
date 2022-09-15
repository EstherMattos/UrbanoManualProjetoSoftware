package Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.io.Serializable;
import java.util.List;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
@Table(name = "residencia")
public class Residencia extends BaseEntity{


    @Column(nullable=false)
    private String Endereco;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="fk_estoque", nullable=true)
    private Estoque Estoque;

    @OneToMany(cascade = CascadeType.PERSIST , mappedBy="Residencia")
    private List<Comodo> Comodos;

    @OneToMany(cascade = CascadeType.PERSIST , mappedBy="Residencia")
    private List<Conta> Contas;

    @JoinColumn(name = "pessoa_id")
    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Pessoa Pessoa;

    @JsonInclude()
    @Transient
    private Long pessoa_id;

    public Long getId() {
        return super.getId();
    }

    public String getEndereco() {
        return Endereco;
    }

    public Models.Estoque getEstoque() {
        return Estoque;
    }

    public List<Comodo> getComodos() {
        return Comodos;
    }

    public List<Conta> getContas() {
        return Contas;
    }

    @JsonIgnore
    public Models.Pessoa getPessoa() {
        return Pessoa;
    }

    public Long getPessoaId(){
        return pessoa_id;
    }

    public void setId(Long id) {
        super.setId(id);
    }

    public void setEndereco(String endereco) {
        Endereco = endereco;
    }

    public void setEstoque(Models.Estoque estoque) {
        Estoque = estoque;
    }

    public void setComodos(List<Comodo> comodos) {
        Comodos = comodos;
    }

    public void setContas(List<Conta> contas) {
        Contas = contas;
    }

    public void setPessoaId(Long id){
        this.pessoa_id = id;
    }

    public void setPessoa(Models.Pessoa pessoa) {
        this.Pessoa = pessoa;
        this.pessoa_id = this.Pessoa.getId();
    }
}
