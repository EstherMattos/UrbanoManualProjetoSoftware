import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-residencia',
  templateUrl: './cadastrar-residencia.component.html',
  styleUrls: ['./cadastrar-residencia.component.scss']
})
export class CadastrarResidenciaComponent implements OnInit {

  @Output('emitirNovoEndereco') emitirNovoEndereco = new EventEmitter();
  @Input('enderecos') enderecos: Array<String> = [];

  public endereco = new FormControl('');
  public formulario: FormGroup;
  
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.GeraFormulario();
  }

  public EmitirNovoEndereco(): void{
    this.enderecos.push(this.endereco.value)
    this.enderecos = [...this.enderecos]

    this.emitirNovoEndereco.emit(this.endereco.value)
    this.endereco.patchValue("")
  }

  public GeraFormulario(): void{

    this.formulario = this._formBuilder.group({
      enderecoNome: [""]
    });

  }

}
