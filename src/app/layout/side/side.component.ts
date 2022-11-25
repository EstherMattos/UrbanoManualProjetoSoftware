import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Rotas } from 'src/enum/enum';
import { ItemMenu } from 'src/models/models';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {

  public ItemMenu: Array<ItemMenu> = [
    {
      Descricao: 'Cômodos',
      Link: Rotas.Comodo
    },
    {
      Descricao: 'Estoque',
      Link: Rotas.Estoque
    },
    {
      Descricao: 'Contas',
      Link: Rotas.Conta
    },
    {
      Descricao: 'Forum',
      Link: Rotas.Forum
    },
    {
      Descricao: 'Tutoriais',
      Link: Rotas.Tutorial
    },
    {
      Descricao: 'Relátorio',
      Link: Rotas.Relatorio
    },
    {
      Descricao: 'Calendário',
      Link: Rotas.Calendario
    },
  ];

  @Input('estado') estado: boolean

  constructor() { }

  ngOnInit(): void {
  }

}
