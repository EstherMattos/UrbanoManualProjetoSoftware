package com.example.servicoshow;

import Models.Residencia;
import Servicos.EstoqueServico;
import Servicos.PessoaServico;
import Servicos.ResidenciaServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping(value = "/residencia")
public class ResidenciaController {

    private final ResidenciaServico residenciaServico;
    private final PessoaServico pessoaServico;

    @Autowired
    public ResidenciaController(ResidenciaServico residenciaServico, PessoaServico pessoaServico) {
        this.residenciaServico = residenciaServico;
        this.pessoaServico = pessoaServico;

    }

    @GetMapping()
    List<Residencia> listAll(){
        return residenciaServico.findAll();
    }

    @GetMapping("/{id}")
    Optional<Residencia> listById(@PathVariable Long id){
        return residenciaServico.findById(id);
    }

    @PostMapping()
    Residencia create(@RequestBody Residencia residencia){
        residencia.setPessoa(pessoaServico.findById(residencia.getPessoaId()).get());

        return residenciaServico.save(residencia);
    }

    @PutMapping("/{id}")
    Residencia update(@RequestBody Residencia residencia, @PathVariable Long id){
        return residenciaServico.update(residencia, id);
    }

    @DeleteMapping("/{id}")
    void delete(@PathVariable Long id){
        residenciaServico.delete(id);
    }

}
