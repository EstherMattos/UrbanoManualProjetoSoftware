import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Rotas } from 'src/enum/enum';
import { InfoUser } from 'src/global/global';
import { Pessoa } from 'src/models/models';
import { PessoaService } from 'src/services/pessoa.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public rotaCadastro: String = Rotas.Cadastro;

  public formulario: FormGroup
  public logando: boolean = false;

  public ListaPessoaCadastradas: Array<Pessoa> = [];

  constructor(private _formBuilder: FormBuilder,
              private _pessoaService: PessoaService,
              private _router: Router,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.formulario = this._formBuilder.group({
      cpf: ["", [Validators.required]],
      password: ["", [Validators.required]]
    })
  }

  async login(): Promise<void>{

    if(this.formulario.status == 'VALID'){
      await this.RetornaPessoas();
      if(this.VerificaCadastro()){
        this.redirect();
      } else {
        this.MostrarMensagem("Usuário ou senha incorreto!")
      }
    }

  }

  async RetornaPessoas(): Promise<void> {
    await this._pessoaService.get_all()
                            .toPromise()
                            .then(r => this.ListaPessoaCadastradas = r)
  }

  public VerificaCadastro(): boolean{
  
    if(this.ListaPessoaCadastradas.map(p => { return {cpf: p.cpf, senha: p.senha} })
                                  .some(e => e.cpf == this.formulario.value.cpf && e.senha == this.formulario.value.password)){
        InfoUser.InserirUsuario(this.ListaPessoaCadastradas.filter(p => p.cpf == this.formulario.value.cpf)[0])  
        InfoUser.ResidenciaSelecionada = InfoUser.Usuario.residencias[0];      
      return true
    } else {
      return false;
     }
  }

  public MostrarMensagem(message: string) {
    this._snackBar.open(message, "Fechar");
  }

  public redirect(){
    this._router.navigate([`../${Rotas.Principal}`]).then(() => {})
  }

  public cpfmask = function (rawValue) {
    return [/[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '.', /[0-9]/, /[0-9]/, /[0-9]/, '-', /[0-9]/, /[0-9]/];
  }
}
