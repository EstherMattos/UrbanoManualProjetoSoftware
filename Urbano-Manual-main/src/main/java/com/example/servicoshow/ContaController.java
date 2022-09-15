package com.example.servicoshow;

import Models.Conta;
import Servicos.ContaServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping(value = "/conta")
public class ContaController {

    private final ContaServico contaServico;

    @Autowired
    public ContaController(ContaServico contaServico) {
        this.contaServico = contaServico;
    }

    @GetMapping()
    List<Conta> listAll(){
        return contaServico.findAll();
    }

    @GetMapping("/{id}")
    Optional<Conta> listById(@PathVariable Long id){
        return contaServico.findById(id);
    }

    @PostMapping()
    Conta create(@RequestBody Conta conta){
        return contaServico.save(conta);
    }

    @PutMapping("/{id}")
    Conta update(@RequestBody Conta conta, @PathVariable Long id){
        return contaServico.update(conta, id);
    }

    @DeleteMapping("/{id}")
    void delete(@PathVariable Long id){
        contaServico.delete(id);
    }
}
