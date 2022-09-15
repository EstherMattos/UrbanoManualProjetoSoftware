package Models;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.Date;

@Entity
@XmlRootElement
@Table(name = "post")
public class Post extends BaseEntity {

    private String Titulo;

    private String Mensagem;

    private Date DataPublicacao;

    private String Nome;

    private Long PessoaId;

    public Long getId() {
        return super.getId();
    }

    public String getTitulo() {
        return Titulo;
    }

    public String getMensagem() {
        return Mensagem;
    }

    public Date getDataPublicacao() {
        return DataPublicacao;
    }

    public String getNome() {
        return Nome;
    }

    public Long getpessoaId() {
        return PessoaId;
    }


    public void setId(Long id) {
        super.setId(id);
    }

    public void setTitulo(String titulo) {
        Titulo = titulo;
    }

    public void setMensagem(String msg) {
        Mensagem = msg;
    }

    public void setDataPublicacao(Date data) {
        DataPublicacao = data;
    }

    public void setNome(String nome) {
        Nome = nome;
    }

    public void setpessoaId(Long pessoaId) {
        PessoaId = pessoaId;
    }

}
