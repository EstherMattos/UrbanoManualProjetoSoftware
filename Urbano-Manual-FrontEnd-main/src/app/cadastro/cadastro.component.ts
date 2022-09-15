import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Rotas } from 'src/enum/enum';
import { InfoUser } from 'src/global/global';
import { Renda, Residencia } from 'src/models/models';
import { PessoaService } from 'src/services/pessoa.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  public formulario: FormGroup;
  
  constructor(private _formBuilder: FormBuilder,
              private _pessoaService: PessoaService,
              private _router: Router,
              private _snackBar: MatSnackBar) { }

  public ngOnInit(): void {
    this.GeraFormulario();
  }

  public GeraFormulario(): void{

    this.formulario = this._formBuilder.group({
      cpf: ["", [Validators.required]],
      idade: ["", [Validators.required]],
      nome: ["", [Validators.required]],
      senha: ["", [Validators.required]],
      rendas: [[]],
      residencias: [[]]
    });

  }

  public AdicionarEndereco(endereco: String): void{
    
    var residencias = this.formulario.value.residencias;
    residencias.push(this.CriarResidencia(endereco));
    
    this.formulario.patchValue({
      residencias: [...residencias]
    })
    
  }
  public CriarResidencia(endereco: String): Residencia{
    return {
      comodos: [],
      contas: [],
      endereco: endereco,
      estoque: {
        produtos: []
      }
    }
  }

  public AdicionarRenda(renda: Renda): void{
    let rendas = this.formulario.value.rendas 
    rendas.push(renda)

    this.formulario.patchValue({
      rendas: rendas
    })
  }

  public ValidaFormulario(): boolean{
    if(this.formulario.status == 'INVALID') return false;
    if(this.formulario.value.rendas.length == 0) return false;
    if(this.formulario.value.residencias.length == 0) return false;

    return true;
  }


  public Cadastrar(): void{
    this._pessoaService.post(this.formulario.value)
      .toPromise()
      .then(r => {
        this.MostrarMensagem("Cadastro realizado")
        InfoUser.InserirUsuario(r)
        InfoUser.ResidenciaSelecionada = InfoUser.Usuario.residencias[0];      
        this.redirect()
      })
      .catch(e => this.MostrarMensagem(e.message))
  }

  public MostrarMensagem(message: string) {
    this._snackBar.open(message, "Fechar");
  }

  public redirect(){
    this._router.navigate([Rotas.Principal])
  }
}
