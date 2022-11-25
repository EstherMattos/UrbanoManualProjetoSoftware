import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Renda } from 'src/models/models';

@Component({
  selector: 'app-cadastrar-renda',
  templateUrl: './cadastrar-renda.component.html',
  styleUrls: ['./cadastrar-renda.component.scss']
})
export class CadastrarRendaComponent implements OnInit {

  @Output('emitirNovaRenda') emitirNovaRenda = new EventEmitter();
  @Input('rendas') rendas: Array<Renda> = [];

  public descricaoRenda = new FormControl('');
  public valorRenda = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  public CriaObjetoRenda(): Renda{
    return {
      pessoaId: null,
      descricao: this.descricaoRenda.value,
      valor: this.valorRenda.value
    }
  }

  public EmitirNovaRenda(renda: Renda): void{
    this.emitirNovaRenda.emit(renda)
  }

  public AdicionarRenda(): void{

    let renda = this.CriaObjetoRenda();
    this.AtualizarTabela(renda);
    this.EmitirNovaRenda(renda);
    this.LimparCampos()

  }

  public SomaRenda(): number {
    return this.rendas.map(r => parseFloat(String(r.valor))).reduce((acc, value) => acc + value, 0);
  }

  public AtualizarTabela(renda: Renda): void{
    this.rendas.push(renda)
    this.rendas = [...this.rendas]
  }

  public LimparCampos(): void{
    this.descricaoRenda.patchValue("")
    this.valorRenda.patchValue("")
  }

}
