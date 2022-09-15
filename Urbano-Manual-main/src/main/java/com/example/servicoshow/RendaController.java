package com.example.servicoshow;

import Models.Pessoa;
import Models.Renda;
import Servicos.PessoaServico;
import Servicos.RendaServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping(value = "/renda")
public class RendaController {

    private final RendaServico rendaServico;
    private final PessoaServico pessoaServico;

    @Autowired
    public RendaController(RendaServico rendaServico, PessoaServico pessoaServico) {
        this.rendaServico = rendaServico;
        this.pessoaServico = pessoaServico;
    }

    @GetMapping()
    List<Renda> listAll(){
        return rendaServico.findAll();
    }

    @GetMapping("/{id}")
    Optional<Renda> listById(@PathVariable Long id){
        return rendaServico.findById(id);
    }

    @PostMapping()
    Renda create(@RequestBody Renda renda){
        renda.setPessoa(pessoaServico.findById(renda.getPessoaID()).get());

        return rendaServico.save(renda);
    }

    @PutMapping("/{id}")
    Renda update(@RequestBody Renda renda, @PathVariable Long id){
        return rendaServico.update(renda, id);
    }

    @DeleteMapping("/{id}")
    void delete(@PathVariable Long id){
        rendaServico.delete(id);
    }

}
