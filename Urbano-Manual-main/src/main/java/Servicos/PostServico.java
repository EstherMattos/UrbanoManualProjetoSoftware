package Servicos;

import Interface.IPostService;
import Models.Post;
import Repository.PostRepository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class PostServico extends BaseService<Post, Long> implements IPostService {
    private PostRepository postRepository;

    public PostServico(PostRepository postRepository) {super(postRepository); }
}
