package com.example.servicoshow;

import Models.Produto;
import Servicos.ProdutoServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping(value = "/produto")
public class ProdutoController {

    private final ProdutoServico produtoServico;

    @Autowired
    public ProdutoController(ProdutoServico produtoServico) {
        this.produtoServico = produtoServico;
    }

    @GetMapping()
    List<Produto> listAll(){
        return produtoServico.findAll();
    }

    @GetMapping("/{id}")
    Optional<Produto> listById(@PathVariable Long id){
        return produtoServico.findById(id);
    }

    @PostMapping()
    Produto create(@RequestBody Produto produto){
        return produtoServico.save(produto);
    }

    @PutMapping("/{id}")
    Produto update(@RequestBody Produto produto, @PathVariable Long id){
        return produtoServico.update(produto, id);
    }

    @DeleteMapping("/{id}")
    void delete(@PathVariable Long id){
        produtoServico.delete(id);
    }

}
