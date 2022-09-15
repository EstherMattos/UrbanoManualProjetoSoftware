package com.example.servicoshow;

import Models.Post;
import Servicos.PostServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
public class PostController {

    private final PostServico postServico;

    @Autowired
    public PostController(PostServico postServico)  {
        this.postServico = postServico;
    }

    @GetMapping("/post")
    List<Post> listAll(){
        return postServico.findAll();
    }

    @GetMapping("/post/{id}")
    Optional<Post> listById(@PathVariable Long id){
        return postServico.findById(id);
    }

    @PostMapping("/post")
    Post create(@RequestBody Post post){
        return postServico.save(post);
    }

    @PutMapping("/post/{id}")
    Post update(@RequestBody Post post, @PathVariable Long id){
        return postServico.update(post, id);
    }

    @DeleteMapping("/post/{id}")
    void delete(@PathVariable Long id){
        postServico.delete(id);
    }
}
