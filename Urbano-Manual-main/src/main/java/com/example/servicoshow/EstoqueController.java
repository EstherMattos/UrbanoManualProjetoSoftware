package com.example.servicoshow;

import Models.Estoque;
import Servicos.EstoqueServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping(value = "/estoque")
public class EstoqueController {

    private final EstoqueServico estoqueServico;

    @Autowired
    public EstoqueController(EstoqueServico estoqueServico) {
        this.estoqueServico = estoqueServico;
    }

    @GetMapping()
    List<Estoque> listAll(){
        return estoqueServico.findAll();
    }

    @GetMapping("/{id}")
    Optional<Estoque> listById(@PathVariable Long id){
        return estoqueServico.findById(id);
    }

    @PostMapping()
    Estoque create(@RequestBody Estoque estoque){
        return estoqueServico.save(estoque);
    }

    @PutMapping("/{id}")
    Estoque update(@RequestBody Estoque estoque, @PathVariable Long id){
        return estoqueServico.update(estoque, id);
    }

    @DeleteMapping("/{id}")
    void delete(@PathVariable Long id){
        estoqueServico.delete(id);
    }
}
