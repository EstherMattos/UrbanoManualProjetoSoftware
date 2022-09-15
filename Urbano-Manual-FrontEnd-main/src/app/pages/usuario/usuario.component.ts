import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Rotas } from 'src/enum/enum';
import { InfoUser } from 'src/global/global';
import { Renda, Residencia } from 'src/models/models';
import { PessoaService } from 'src/services/pessoa.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  public formulario: FormGroup;

  public ListaEnderecos: String[] = InfoUser.Usuario.residencias.map(r => r.endereco)
  public ListaRendas: Renda[] = InfoUser.Usuario.rendas

  constructor(private _formBuilder: FormBuilder,
              private _pessoaService: PessoaService,
              private _router: Router,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.formulario = this._formBuilder.group({
      id: InfoUser.Usuario.id,
      cpf: [InfoUser.Usuario.cpf, [Validators.required]],
      idade: [InfoUser.Usuario.idade, [Validators.required]],
      nome: [InfoUser.Usuario.nome, [Validators.required]],
      senha: [InfoUser.Usuario.senha, [Validators.required]],
      rendas: [InfoUser.Usuario.rendas],
      residencias: [InfoUser.Usuario.residencias]
    });
  }

  public delete(): void{
    this._pessoaService.delete(this.formulario.value.id)
      .toPromise()
      .then(r => {
        this.redirect()
        this.MostrarMensagem("Usuario excluído!")
      })

    this._pessoaService.AtualizarUsuarioLogado();
  }

  public put(): void{
    this._pessoaService.put(this.formulario.value)
      .toPromise()
      .then(e => this.MostrarMensagem("Usuário atualizado com sucesso!"))
      .catch(e => this.MostrarMensagem(e.message))
    
    this._pessoaService.AtualizarUsuarioLogado();
  }

  public redirect(){
    this._router.navigate([Rotas.Login])
  }

  public CriaObjetoRenda(renda): Renda{
    return {
      pessoaId: InfoUser.Usuario.id,
      descricao: renda.descricao,
      valor: renda.valor
    }
  }

  public CriaObjetoResidencia(residencia): Residencia{
    return {
      comodos: [],
      contas: [],
      endereco: residencia,
      estoque: {
        produtos: []
      }
    }
  }


  public AdicionarRenda(renda): void{
    //this.formulario.value.rendas.push(this.CriaObjetoRenda(renda))
  }

  public AdicionarEndereco(endereco): void{
    this.formulario.value.residencias.push(this.CriaObjetoResidencia(endereco))
  }

  public MostrarMensagem(message: string): void{
    this._snackBar.open(message, "Fechar");
  }



}
