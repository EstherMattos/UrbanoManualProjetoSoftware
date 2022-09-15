import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
  url: string;
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Renda', url: '',
    children: [
      {
        name: 'Vídeos', url: '',
        children: [
          {name: 'Como fazer um ORÇAMENTO MENSAL SIMPLES', url: 'https://www.youtube.com/watch?v=G2IRB19P3Rk'},
          {name: 'Dificuldade para organizar seu ORÇAMENTO?', url: 'https://www.youtube.com/watch?v=8unUDfaR3_w'},
          {name: 'Organize suas finanças em 4 passos!', url: 'https://www.youtube.com/watch?v=WvW-jNG_2DA'},
        ],
      },
      {
        name: 'Blogs', url: '',
        children: [
          {name: '8 dicas para elaborar um orçamento mensal pessoal',
            url: 'https://sonharemorar.com.br/8-dicas-para-elaborar-um-orcamento-mensal-pessoal/'},
          {name: 'Orçamento Pessoal: O que é e como Fazer Agora [6 Passos]',
            url: 'https://www.mobills.com.br/blog/planejamento-financeiro/orcamento-pessoal/'},
          {name: 'Como organizar seu orçamento mensal de forma simples e objetiva?',
            url: 'https://www.santander.com.br/blog/como-montar-um-orcamento'},
        ],
      },
    ],
  },
  {
    name: 'Cômodos', url: '',
    children: [
      {
        name: 'Quarto', url: '',
        children: [
          {
            name: 'Vídeos', url: '',
            children: [
              {name: 'Como Limpar Quarto', url: 'https://www.youtube.com/watch?v=D-W1Gh_UnEY'},
              {name: 'ROTINA DE LIMPEZA E ORGANIZAÇÃO DO QUARTO | Organize sem Frescuras!', url: 'https://www.youtube.com/watch?v=SxBORRqXqQE'},
              {name: 'DICAS PARA ORGANIZAR/LIMPAR O QUARTO | A DICA DO DIA COM FLÁVIA FERRARI', url: 'https://www.youtube.com/watch?v=ecBpeZ2vapM'},
            ],
          },
          {
            name: 'Blogs', url: '',
            children: [
              {name: 'COMO MANTER O QUARTO ORGANIZADO: 10 DICAS PARA EVITAR A BAGUNÇA',
                url: 'https://uaulimpeza.com.br/blog/como-manter-o-quarto-organizado/'},
              {name: 'COMO LIMPAR O QUARTO: CONFIRA 4 DICAS PRÁTICAS',
                url: 'https://uaulimpeza.com.br/blog/como-limpar-o-quarto/'},
              {name: 'Como limpar o quarto: truques para facilitar na hora da faxina',
                url: 'https://casavogue.globo.com/Interiores/Ambientes/noticia/2020/08/como-limpar-o-quarto-truques-para-facilitar-na-hora-da-faxina.html'},
            ],
          },
        ]
      },
      {
        name: 'Banheiro', url: '',
        children: [
          {
            name: 'Vídeos', url: '',
            children: [
              {name: 'HOW TO CLEAN BATHROOM | FLÁVIA FERRARI', url: 'https://www.youtube.com/watch?v=mt4JhAJ6t8c'},
              {name: 'COMO LIMPAR BANHEIRO DE UMA FORMA RÁPIDA E EFICAZ |#PahTodoDia #19', url: 'https://www.youtube.com/watch?v=vnSUV4c0Vk0'},
              {name: 'Como limpar banheiro de forma rápida com Rafa Oliveira', url: 'https://www.youtube.com/watch?v=6VAytLCoOrs'},
            ],
          },
          {
            name: 'Blogs', url: '',
            children: [
              {name: 'Como higienizar corretamente o banheiro?',
                url: 'https://www.ideiaglass.com.br/dicas/como-higienizar-corretamente-o-banheiro/'},
              {name: '5 dicas para manter o banheiro sempre limpo',
                url: 'https://casavogue.globo.com/Smart/noticia/2021/04/5-dicas-para-manter-o-banheiro-sempre-limpo.html'},
              {name: '5 produtos de limpeza para banheiro para sempre ter em casa',
                url: 'https://www.casapraticaqualita.com.br/noticia/5-produtos-de-limpeza-para-banheiro-para-sempre-ter-em-casa_a1245/1'},
            ],
          },
        ]
      },
      {
        name: 'Sala', url: '',
        children: [
          {
            name: 'Vídeos', url: '',
            children: [
              {name: 'COMO LIMPAR A SALA DE ESTAR EM 4 PASSOS | Organiza Dafne 💦', url: 'https://www.youtube.com/watch?v=PIfgBie67T4'},
              {name: 'Como limpar a Sala', url: 'https://www.youtube.com/watch?v=aa3sSlh2bc0'},
              {name: 'LIMPEZA E ORGANIZAÇÃO DA SALA EM APENAS 25 MINUTOS | Organize sem Frescuras!', url: 'https://www.youtube.com/watch?v=vvX15QGWITs'},
            ],
          },
          {
            name: 'Blogs', url: '',
            children: [
              {name: 'Como limpar a sala de estar: truques para facilitar a faxina de cada item',
                url: 'https://casavogue.globo.com/Interiores/Ambientes/noticia/2020/08/como-limpar-sala-de-estar-truques-para-facilitar-faxina-de-cada-item.html'},
              {name: 'COMO DEIXAR A SALA DE ESTAR SEMPRE ORGANIZADA',
                url: 'https://www.madeirol.com.br/blog/index.php/2019/09/27/como-deixar-a-sala-de-estar-sempre-organizada/#:~:text=Evite%20colocar%20muitas%20coisas%20na,que%20tornar%C3%A1%20cansativo%20a%20rotina.'},
              {name: 'Limpeza da casa: passo a passo para deixar a casa brilhando',
                url: 'https://www.mobly.com.br/blog/dicas/limpeza-salas-decoradas/'},
            ],
          },
        ]
      },
      {
        name: 'Lavanderia', url: '',
        children: [
          {
            name: 'Vídeos', url: '',
            children: [
              {name: 'COMO ORGANIZAR e LIMPAR LAVANDERIA PEQUENA | FAXINA PESADA NA LAVANDERIA | TOUR', url: 'https://www.youtube.com/watch?v=QNm9fFUI4gI'},
              {name: 'LIMPANDO E ORGANIZANDO A LAVANDERIA | FAXINÃO DE FIM DE ANO!!', url: 'https://www.youtube.com/watch?v=zrj3IGLRNDM'},
              {name: 'faxina na lavanderia + como organizo | comprei meu janelão | casa limpa', url: 'https://www.youtube.com/watch?v=eJs7QYbMt1w'},
            ],
          },
          {
            name: 'Blogs', url: '',
            children: [
              {name: 'Guia de organização: como higienizar e arrumar a cozinha, a despensa e a lavanderia',
                url: 'https://casavogue.globo.com/Interiores/Ambientes/noticia/2020/05/guia-de-organizacao-como-higienizar-e-arrumar-cozinha-despensa-e-lavanderia.html'},
              {name: 'Lavanderia: 12 dicas para manter a organização na área de serviço',
                url: 'https://revistacasaejardim.globo.com/Casa-e-Jardim/Dicas/noticia/2020/04/lavanderia-12-dicas-para-manter-organizacao-na-area-de-servico.html'},
              {name: 'Limpeza da lavanderia ou área de serviço – Diarista Maringá.',
                url: 'https://www.diaristamaringa.com.br/limpeza-da-lavanderia-diarista-maringa/'},
            ],
          },
        ]
      },
      {
        name: 'Cozinha', url: '',
        children: [
          {
            name: 'Vídeos', url: '',
            children: [
              {name: 'Limpeza rápida e prática na cozinha com Rafa Oliveira', url: 'https://www.youtube.com/watch?v=c-jFny06kOw'},
              {name: 'ROTINA DE LIMPEZA (COMPLETA) DA COZINHA | Organize sem Frescuras!', url: 'https://www.youtube.com/watch?v=W3XqLyKof24'},
              {name: 'Como Limpar sua Cozinha', url: 'https://www.youtube.com/watch?v=Y1kUMtOP7j4'},
            ],
          },
          {
            name: 'Blogs', url: '',
            children: [
              {name: 'Confira 5 truques sobre faxinar a cozinha rápido e economizar tempo',
                url: 'https://www.atlas.ind.br/blog/confira-5-truques-sobre-faxinar-a-cozinha-rapido-e-economizar-tempo/'},
              {name: 'Um guia passo a passo para limpar a cozinha e tudo que há nela',
                url: 'https://casa.abril.com.br/organizacao/guia-passo-a-passo-limpar-cozinha/'},
              {name: 'Limpar a cozinha: como fazer uma faxina profunda',
                url: 'https://www.cleanipedia.com/br/limpeza-da-cozinha/como-limpar-a-cozinha-limpeza-profunda.html'},
            ],
          },
        ]
      },
    ],
  },
];


@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit {

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
  hasUrl = (_: number, node: FoodNode) => !!node.url && node.url.length > 0;

  ngOnInit(): void {
  }

}


