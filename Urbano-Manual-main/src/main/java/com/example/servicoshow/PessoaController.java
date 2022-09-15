package com.example.servicoshow;

import Models.Pessoa;
import Servicos.PessoaServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class PessoaController {

    private final PessoaServico pessoaServico;

    @Autowired
    public PessoaController(PessoaServico pessoaServico) { this.pessoaServico = pessoaServico; }

    @GetMapping("/pessoa")
    List<Pessoa> listAll(){
        return pessoaServico.findAll();
    }

    @GetMapping("/pessoa/{id}")
    Optional<Pessoa> listById(@PathVariable Long id){
        return pessoaServico.findById(id);
    }

    @PostMapping("/pessoa")
    Pessoa create(@RequestBody Pessoa pessoa){

        pessoa.getRendas().forEach(e -> pessoa.AddRenda(e));
        pessoa.getResidencias().forEach(e -> pessoa.AddResidencia(e));

        return pessoaServico.save(pessoa);
    }

    @PutMapping("/pessoa/{id}")
    Pessoa update(@RequestBody Pessoa pessoa, @PathVariable Long id){

        pessoa.getRendas().forEach(e -> pessoa.AddRenda(e));
        pessoa.getResidencias().forEach(e -> pessoa.AddResidencia(e));
        
        return pessoaServico.update(pessoa, id);
    }

    @DeleteMapping("/pessoa/{id}")
    void delete(@PathVariable Long id){
        pessoaServico.delete(id);
    }
}
