import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabela-conta',
  templateUrl: './tabela-conta.component.html',
  styleUrls: ['./tabela-conta.component.scss']
})
export class TabelaContaComponent implements OnInit {

  @Input('registros') registros;
  @Output('emiteRemocao') emiteRemocao = new EventEmitter();
  public colunas = ['descricao', 'valor', 'btnRemover']

  constructor() { }

  ngOnInit(): void {
  }

  public SomaTotal(): number{
    return this.registros.map(r => parseFloat(String(r.valor))).reduce((acc, value) => acc + value, 0);
  }

  public RemoverConta(index: number): void{
    this.EmitirRemocao(index);
    this.registros = this.registros.filter((r, i) => i != index)
    this.registros = [...this.registros]
  }

  public EmitirRemocao(index: number): void{
    this.emiteRemocao.emit(this.registros[index])
  }

}
