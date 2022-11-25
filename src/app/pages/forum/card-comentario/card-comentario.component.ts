import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InfoUser } from 'src/global/global';
import { Comentario } from 'src/models/models';

@Component({
  selector: 'app-card-comentario',
  templateUrl: './card-comentario.component.html',
  styleUrls: ['./card-comentario.component.scss']
})
export class CardComentarioComponent implements OnInit {

  @Input('Comentario') Comentario: Comentario = null;

  @Output('emiteAlterarComentario') emiteAlterarComentario = new EventEmitter();
  @Output('emiteDeletarComentario') emiteDeletarComentario = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public AlterarComentario(): void{
    this.emiteAlterarComentario.emit(this.Comentario)
  }

  public DeletarComenario(): void{
    this.emiteDeletarComentario.emit(this.Comentario)
  }

  public MostrarOpcoes(): boolean{
    if(this.Comentario.pessoaId == InfoUser.Usuario.id)
      return true;

    return false;
  }

}
