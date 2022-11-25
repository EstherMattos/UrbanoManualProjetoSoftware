import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Comentario } from 'src/models/models';
import { ForumService } from 'src/services/forum.service';
import { AdicionarComentarioComponent } from './adicionar-comentario/adicionar-comentario.component';
import * as _ from 'lodash';
import { InfoUser } from 'src/global/global';

export enum Visualizacao{
  DATACRESCENTE,
  DATADECRESCENTE,
  USARIOLOGADO
}

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {
    
  public Comentarios: Comentario[] = [] 
  public ListaComentariosAux: Comentario[] = []

  public ListaVisualizacao = [
    {
      Descricao: 'Ordenar por data (Crescente)',
      Valor: Visualizacao.DATACRESCENTE
    },
    {
      Descricao: 'Ordenar por data (decrescente)',
      Valor: Visualizacao.DATADECRESCENTE
    },
    {
      Descricao: 'Minhas publicações',
      Valor: Visualizacao.USARIOLOGADO
    }
  ]

  constructor(private _forumService: ForumService,
              public dialog: MatDialog) { }

  public ngOnInit(): void {
    this.Get();
  }
  
  //#region MÉTODOS DE ABERTURA DO DIALOG
  public AdicionarComentario(): void{
    this.dialog.open(AdicionarComentarioComponent)
               .afterClosed()
               .subscribe((r: Comentario) => {if(r) this.Post(r)});
  }
  
  public AlterarComentario(comentario: Comentario): void{
    this.dialog.open(AdicionarComentarioComponent, {data: comentario})
               .afterClosed()
               .subscribe((r: Comentario) => {if(r) this.Put(r)});
  }

  //#endregion

  //#region MÉTODOS DE CRUD
  public Post(comentario: Comentario): void{
    this._forumService.post(comentario)
                      .toPromise()
                      .then(r => this.AdicionarComentarioLista(r))
  }

  public Put(comentario: Comentario): void{
    this._forumService.put(comentario)
                      .toPromise()
                      .then(r => this.AlterarComentarioLista(r))
  }

  async Get(): Promise<void>{
    await this._forumService.get_all()
                            .toPromise()
                            .then(r => this.AdicionarComentarios(r))
  }

  public Delete(comentario: Comentario): void{
    this._forumService.delete(comentario.id)
                      .toPromise()
                      .then(() => this.RemoverComentarioLista(comentario))                      
  }
  //#endregion

  //#region MÉTODOS DE MANIPULAÇÃO DE LISTA
  public AdicionarComentarios(comentarios: Comentario[]): void{
    this.Comentarios = comentarios
  }

  public AdicionarComentarioLista(comentario: Comentario): void{
    this.Comentarios.push(comentario);
  }

  public AlterarComentarioLista(comentario: Comentario): void{
    this.Comentarios[this.Comentarios.map(c => c.id).indexOf(comentario.id)] = comentario;
  }

  public RemoverComentarioLista(comentario: Comentario): void{
    this.Comentarios = this.Comentarios.filter(c => c.id != comentario.id)
  }

  async MudarOrdenacao(evento){
    
    await this.Get();

    switch(evento.value){
      case 0: this.OrdenarFormaCrescente();
              break;
      case 1: this.OrdenaFormaDecrescente();
              break;
      case 2: this.MostrarPostsUsuarioLogado();
              break;
    }
  }

  public OrdenarFormaCrescente(): void{ 
    this.Comentarios = this.Comentarios.sort((a, b) => {
      return a.id - b.id;
  });
  }

  public OrdenaFormaDecrescente(): void{
    this.Comentarios = this.Comentarios.sort((a, b) => {
      return b.id - a.id;
  });
  }
  
  public MostrarPostsUsuarioLogado(): void{
    this.Comentarios = this.Comentarios.filter(c => c.pessoaId == InfoUser.Usuario.id)
  }
  //#endregion

}
