import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  @Input('quantidade') quantidade;
  @Output('emiteNovaQuantidade') emiteNovaQuantidade = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public incrementar(): void{
    this.emitir(this.quantidade + 1)
  }

  public decrementar(): void{
    if(this.quantidade > 1) this.emitir(this.quantidade - 1)
  } 

  public emitir(quantidade: number): void{
    this.emiteNovaQuantidade.emit(quantidade);
  }
}
