package com.example.servicoshow;

import Models.Comodo;
import Servicos.ComodoServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class ComodoController {

    private final ComodoServico comodoServico;

    @Autowired
    public ComodoController(ComodoServico comodoServico) {
        this.comodoServico = comodoServico;
    }

    @GetMapping("/comodo")
    List<Comodo> listAll(){
        return comodoServico.findAll();
    }

    @GetMapping("/comodo/{id}")
    Optional<Comodo> listById(@PathVariable Long id){
        return comodoServico.findById(id);
    }

    @PostMapping("/comodo")
    Comodo create(@RequestBody Comodo comodo){
        return comodoServico.save(comodo);
    }

    @PutMapping("/comodo/{id}")
    Comodo update(@RequestBody Comodo comodo, @PathVariable Long id){
        return comodoServico.update(comodo, id);
    }

    @DeleteMapping("/comodo/{id}")
    void delete(@PathVariable Long id){
        comodoServico.delete(id);
    }

}
