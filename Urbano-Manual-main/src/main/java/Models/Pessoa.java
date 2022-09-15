package Models;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
@Table(name = "pessoa")
public class Pessoa extends BaseEntity{

    private String CPF;

    @Column(nullable=false)

    private String Nome;

    private String Idade;

    private String Senha;

    @OneToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, mappedBy="Pessoa", orphanRemoval=true)
    private List<Renda> Rendas;

    @OneToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE} , mappedBy="Pessoa", orphanRemoval=true)
    private List<Residencia> Residencias;

    public Long getId() {
        return super.getId();
    }

    public String getCPF() {
        return CPF;
    }

    public String getNome() {
        return Nome;
    }

    public String getIdade() {
        return Idade;
    }
    public String getSenha() {
        return Senha;
    }

    public List<Renda> getRendas() {
        return Rendas;
    }

    public List<Residencia> getResidencias() {
        return Residencias;
    }

    public void setId(Long id) {
        super.setId(id);
    }

    public void setCPF(String CPF) {
        this.CPF = CPF;
    }

    public void setSenha(String Senha) {
        this.Senha = Senha;
    }

    public void setNome(String nome) {
        Nome = nome;
    }

    public void setIdade(String idade) {
        Idade = idade;
    }

    public void setRendas(List<Renda> rendas) {
        Rendas = rendas;
    }

    public void setResidencias(List<Residencia> residencias) {
        Residencias = residencias;
    }

    public void AddRenda(Renda renda){
        if (renda == null) {
            return;
        }
        renda.setPessoa(this);
        if (Rendas == null) {
            Rendas = new ArrayList<Renda>();
            Rendas.add(renda);
        } else if (!Rendas.contains(renda)) {
            Rendas.add(renda);
        }
    }

    public void AddResidencia(Residencia residencia){
        if (residencia == null) {
            return;
        }
        residencia.setPessoa(this);
        if (Residencias == null) {
            Residencias = new ArrayList<Residencia>();
            Residencias.add(residencia);
        } else if (!Residencias.contains(residencia)) {
            Residencias.add(residencia);
        }
    }
}