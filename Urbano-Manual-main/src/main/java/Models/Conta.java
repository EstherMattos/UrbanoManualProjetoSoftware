package Models;

import Enum.Enums;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.io.Serializable;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
@Table(name = "conta")
public class Conta extends BaseEntity{

    @Column(nullable=false)
    private Enums.TipoConta Tipo;

    @Column(nullable=false)
    private String Descricao;

    private double Valor;

    @JoinColumn(name = "residencia_id", insertable = false, updatable = false)
    @ManyToOne(targetEntity = Residencia.class, fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Residencia Residencia;

    @JoinColumn(name = "residencia_id")
    private Long residencia_id;

    public void setId(Long id) {
        super.setId(id);
    }

    public void setTipo(Enums.TipoConta tipo) {
        Tipo = tipo;
    }

    public void setDescricao(String descricao) {
        Descricao = descricao;
    }

    public void setValor(double valor) {
        Valor = valor;
    }

    public Long getId() {
        return super.getId();
    }

    public Enums.TipoConta getTipo() {
        return Tipo;
    }

    public String getDescricao() {
        return Descricao;
    }

    public double getValor() {
        return Valor;
    }

    @JsonIgnore
    public Models.Residencia getResidencia() {
        return Residencia;
    }
    public Long getResidenciaId(){
        return residencia_id;
    }
    public void setResidenciaId(Long id){
        this.residencia_id = id;
    }
    @JsonIgnore
    public void setResidencia(Models.Residencia residencia) {
        setResidenciaId(Residencia.getId());
        this.Residencia = residencia;
    }
}