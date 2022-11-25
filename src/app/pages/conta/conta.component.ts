import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TipoConta } from 'src/enum/enum';
import { InfoUser } from 'src/global/global';
import { Conta } from 'src/models/models';
import { ContaService } from 'src/services/conta.service';
import { PessoaService } from 'src/services/pessoa.service';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.scss']
})
export class ContaComponent implements OnInit {

  public formulario: FormGroup;

  public TiposConta = [
    {
      Descricao: 'Fixa',
      Valor: TipoConta.FIXA
    },
    {
      Descricao: 'Variável',
      Valor: TipoConta.VARIAVEL
    }
  ]

  public ContasFixas: Conta[] = InfoUser.ResidenciaSelecionada.contas.filter(c => c.tipo === TipoConta[TipoConta.FIXA]);
  public ContasVariaveis: Conta[] = InfoUser.ResidenciaSelecionada.contas.filter(c => c.tipo === TipoConta[TipoConta.VARIAVEL]);

  constructor(private _formBuilder: FormBuilder,
              private _contaService: ContaService,
              private _pessoaService: PessoaService,
              private _snackBar: MatSnackBar
              ) { }

  async ngOnInit(): Promise<void> {

    this.formulario = this._formBuilder.group({
      Descricao: ["", Validators.required],
      Valor: [null, Validators.required],
      TipoConta: [null, Validators.required]
    })

    await this._pessoaService.AtualizarUsuarioLogado();
    this.ContasFixas = InfoUser.ResidenciaSelecionada.contas.filter(c => c.tipo === TipoConta[TipoConta.FIXA])
    this.ContasVariaveis = InfoUser.ResidenciaSelecionada.contas.filter(c => c.tipo === TipoConta[TipoConta.VARIAVEL]);
  }

  public GerarConta(tipoConta: TipoConta): Conta{
    return {
      id: 0,
      descricao: this.formulario.value.Descricao,
      residenciaId: InfoUser.ResidenciaSelecionada.id,
      tipo: tipoConta,
      valor: this.formulario.value.Valor
    }
  }

  public AdicionarContaTabela(conta: Conta): void{
    switch(this.formulario.value.TipoConta){
      case 0: this.ContasFixas.push(conta)
              this.ContasFixas = [...this.ContasFixas]
              break;
      case 1: this.ContasVariaveis.push(conta)
              this.ContasVariaveis = [...this.ContasVariaveis]
              break;
    }

    this.MostrarMensagem("Conta adicionada!")
    this.LimparFormulario();
  }
  
  async Post(): Promise<void>{
    await this._contaService.post(this.GerarConta(this.formulario.value.TipoConta))
                            .toPromise()
                            .then(r => this.AdicionarContaTabela(r))
                            .catch(e => this.MostrarMensagem(e.message))
  }

  public Delete(conta: Conta, tipoConta: String): void{

    switch(tipoConta){
      case 'FIXA':     this._contaService.delete(conta.id)
                                         .toPromise()
                                         .then(r => this.MostrarMensagem("Conta removida!"))
                                         .catch(e => this.MostrarMensagem(e.message)); 
                       this.ContasFixas = [...this.ContasFixas.filter(c => c != conta)]
                       break;
      case 'VARIAVEL': this._contaService.delete(conta.id)
                                         .toPromise()
                                         .then(r => this.MostrarMensagem("Conta removida!"))
                                         .catch(e => this.MostrarMensagem(e.message)) 
                       this.ContasVariaveis = [...this.ContasVariaveis.filter(c => c != conta)]
                       break;
    }
    
  }

  public MostrarMensagem(message: string): void{
    this._snackBar.open(message, "Fechar");
  }

  public LimparFormulario(): void{
    this.formulario.patchValue({
      Descricao: '',
      Valor: null
    })
  }
  
}
