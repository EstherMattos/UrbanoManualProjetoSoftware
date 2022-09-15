import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-residencia',
  templateUrl: './cadastrar-residencia.component.html',
  styleUrls: ['./cadastrar-residencia.component.scss']
})
export class CadastrarResidenciaComponent implements OnInit {

  @Output('emitirNovoEndereco') emitirNovoEndereco = new EventEmitter();
  @Input('enderecos') enderecos: Array<String> = [];

  public endereco = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  public EmitirNovoEndereco(): void{
    this.enderecos.push(this.endereco.value)
    this.enderecos = [...this.enderecos]

    this.emitirNovoEndereco.emit(this.endereco.value)
    this.endereco.patchValue("")
  }

}
