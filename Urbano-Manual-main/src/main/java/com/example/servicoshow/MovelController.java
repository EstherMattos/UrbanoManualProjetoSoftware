package com.example.servicoshow;

import Models.Comodo;
import Models.Movel;
import Servicos.MovelServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping(value = "/movel")
public class MovelController {

    private final MovelServico movelServico;

    @Autowired
    public MovelController(MovelServico movelServico) {
        this.movelServico = movelServico;
    }

    @GetMapping()
    List<Movel> listAll(){
        return movelServico.findAll();
    }

    @GetMapping("/{id}")
    Optional<Movel> listById(@PathVariable Long id){
        return movelServico.findById(id);
    }

    @PostMapping()
    Movel create(@RequestBody Movel movel){
        return movelServico.save(movel);
    }

    @PutMapping("/{id}")
    Movel update(@RequestBody Movel movel, @PathVariable Long id){
        return movelServico.update(movel, id);
    }

    @DeleteMapping("/{id}")
    void delete(@PathVariable Long id){
        movelServico.delete(id);
    }
}
