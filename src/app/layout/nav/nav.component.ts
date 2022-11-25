import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output() emiteMudancaEstado = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  public MudarEstado(): void {
    this.emiteMudancaEstado.emit()
  }


}
