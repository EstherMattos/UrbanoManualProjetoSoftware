import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `<app-nav (emiteMudancaEstado)="MudarEstado()"></app-nav>
             <app-side [estado]="estado">
                <ng-content></ng-content>
             </app-side>
             `,
})
export class LayoutComponent implements OnInit {

  public estado: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public MudarEstado(): void{
    this.estado = !this.estado;
  }

}
