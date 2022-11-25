import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClassificacaoMovel } from 'src/enum/enum';
import { InfoUser } from 'src/global/global';

@Component({
  selector: 'app-criar-comodo',
  templateUrl: './criar-comodo.component.html',
  styleUrls: ['./criar-comodo.component.scss']
})
export class CriarComodoComponent implements OnInit {

  public classificacaoMovel = new FormControl('');
  public tamanho = new FormControl('');

  public ClassificacaoMovel = [
    {
      Descricao: 'Banheiro',
      Valor: ClassificacaoMovel.BANHEIRO
    },
    {
      Descricao: 'Cozinha',
      Valor: ClassificacaoMovel.COZINHA
    },
    {
      Descricao: 'Sala',
      Valor: ClassificacaoMovel.SALA
    }
  ]

  constructor(public dialogRef: MatDialogRef<CriarComodoComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
  }

  public Cadastrar(): void{
    this.dialogRef.close(
      {
        limpeza: 'N',
        moveis: [],
        residenciaId: InfoUser.ResidenciaSelecionada.id,
        classificacaoMovel: ClassificacaoMovel[this.classificacaoMovel.value],
        tamanho: this.tamanho.value
      }
     )
  }

}
