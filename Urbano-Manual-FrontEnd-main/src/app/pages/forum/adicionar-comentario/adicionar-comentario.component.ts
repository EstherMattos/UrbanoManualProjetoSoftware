import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InfoUser } from 'src/global/global';
import { Comentario } from 'src/models/models';

@Component({
  selector: 'app-adicionar-comentario',
  templateUrl: './adicionar-comentario.component.html',
  styleUrls: ['./adicionar-comentario.component.scss']
})
export class AdicionarComentarioComponent implements OnInit {

  public formulario: FormGroup;

  constructor(public dialogRef: MatDialogRef<AdicionarComentarioComponent>,
              @Inject(MAT_DIALOG_DATA) public data,
              private _formBuilder: FormBuilder) {

    this.GerarFormulario();

    if(data){
      this.PreencherFormulario(data);
    }
  
  }

  ngOnInit(): void {
    
  }

  public GerarFormulario(): void{
    this.formulario = this._formBuilder.group({
      id: 0,
      titulo: "",
      mensagem: "",
      dataPublicacao: Date.now(),
      pessoaId: InfoUser.Usuario.id,
      nome: InfoUser.Usuario.nome
    })
  }

  public PreencherFormulario(comentario: Comentario): void{
    this.formulario.patchValue({
      id: comentario.id,
      titulo: comentario.titulo,
      mensagem: comentario.mensagem,
      dataPublicacao: comentario.dataPublicacao,
      pessoaId: InfoUser.Usuario.id,
      nome: InfoUser.Usuario.nome
    })
  }

  public Comentar(): void{
    this.dialogRef.close(this.formulario.value);
  }



}
