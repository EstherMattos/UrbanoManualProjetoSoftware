package Models;

import Enum.Enums;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.io.Serializable;
import java.util.List;
import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
@Table(name = "comodo")
public class Comodo extends BaseEntity {

    private String Tamanho;

    private String Limpeza;

    @Column(nullable=false)
    private Enums.ClassificacaoMovel ClassificacaoMovel;

    @OneToMany(cascade = CascadeType.PERSIST, mappedBy="Comodo", orphanRemoval=true)
    private List<Movel> Moveis;

    @JoinColumn(name = "residencia_id", insertable = false, updatable = false)
    @ManyToOne(targetEntity = Residencia.class, fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Residencia Residencia;

    @JoinColumn(name = "residencia_id")
    private Long residencia_id;

    public Long getId() {
        return super.getId();
    }

    public String getTamanho() {
        return Tamanho;
    }

    public String getLimpeza() {
        return Limpeza;
    }

    public Enums.ClassificacaoMovel getClassificacaoMovel() {
        return ClassificacaoMovel;
    }

    public List<Movel> getMoveis() {
        return Moveis;
    }

    @JsonIgnore
    public Models.Residencia getResidencia() {
        return Residencia;
    }
    public Long getResidenciaId(){
        return residencia_id;
    }

    public void setId(Long id) {
        super.setId(id);
    }

    public void setTamanho(String tamanho) {
        Tamanho = tamanho;
    }

    public void setLimpeza(String limpeza) {
        Limpeza = limpeza;
    }

    public void setClassificacaoMovel(Enums.ClassificacaoMovel classificacaoMovel) {
        ClassificacaoMovel = classificacaoMovel;
    }

    public void setMoveis(List<Movel> moveis) {
        Moveis = moveis;
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