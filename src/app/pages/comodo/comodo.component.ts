import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClassificacaoMovel } from 'src/enum/enum';
import { InfoUser } from 'src/global/global';
import { Comodo, Movel } from 'src/models/models';
import { ComodoService } from 'src/services/comodo.service';
import { MovelService } from 'src/services/movel.service';
import { PessoaService } from 'src/services/pessoa.service';
import { CriarComodoComponent } from './criar-comodo/criar-comodo.component';

@Component({
  selector: 'app-comodo',
  templateUrl: './comodo.component.html',
  styleUrls: ['./comodo.component.scss']
})
export class ComodoComponent implements OnInit {

  public formulario: FormGroup;

  public descricaoMovel = new FormControl('');
  public quantidadeMovel = new FormControl('');

  public ClassificacaoMovel = [
    {
      Descricao: 'BANHEIRO',
      Valor: ClassificacaoMovel.BANHEIRO
    },
    {
      Descricao: 'COZINHA',
      Valor: ClassificacaoMovel.COZINHA
    },
    {
      Descricao: 'SALA',
      Valor: ClassificacaoMovel.SALA
    }
  ]

  public colunas: String[] = ['descricao', 'quantidade', 'remover']
  public comodos: Comodo[] = []
  public comodoSelecionado: Comodo = null;

  constructor(private _formBuilder: FormBuilder,
              private _pessoaService: PessoaService,
              private _comodoService: ComodoService,
              private _movelService: MovelService,
              private _snackBar: MatSnackBar,
              public dialog: MatDialog) { }

  async ngOnInit(): Promise<void> {

    this.GerarFormulario();
    await this._pessoaService.AtualizarUsuarioLogado();
    this.comodos = InfoUser.ResidenciaSelecionada.comodos
    
    if(InfoUser.ResidenciaSelecionada.comodos.length > 0){
      this.comodoSelecionado = this.comodos[0]
      this.CarregarFormulario();
    }
  }


  public ClassificacaoEnumToString(classificacaoMovel: any): String{ 
    if(typeof(classificacaoMovel) == "string") return classificacaoMovel 
    if(typeof(classificacaoMovel) != "string") return ClassificacaoMovel[classificacaoMovel]
  }

  //#region MÉTODOS REFERENTES AO FORMULÁRIO
  public GerarFormulario(): void{
    this.formulario = this._formBuilder.group({
      id: 0,
      limpeza: [true, Validators.required],
      moveis: [[]],
      residenciaId: 0,
      tamanho: ["", [Validators.required]],
      classificacaoMovel: [null, [Validators.required]]
    })
  }

  public CarregarFormulario(): void{
    this.formulario.patchValue({
      id: this.comodoSelecionado.id,
      limpeza: this.comodoSelecionado.limpeza == 'S' ? true : false,
      moveis: this.comodoSelecionado.moveis,
      residenciaId: this.comodoSelecionado.residenciaId,
      tamanho: this.comodoSelecionado.tamanho,
      classificacaoMovel: ClassificacaoMovel[this.comodoSelecionado.classificacaoMovel]
    })
  }
  //#endregion

  //#region MÉTODOS REFERENTES A COMODO
  public AdicionarComodo(comodo): void {
    this._comodoService.post(comodo)
                       .toPromise()
                       .then(r => {
                          this.comodos.push(r)
                          this.MostrarMensagem("Cômodo criado!")
                       })
                       .catch(e => this.MostrarMensagem(e.message))
  }

  public AlterarComodo(): void {
      this._comodoService.put({
        ...this.formulario.value,
        limpeza: this.formulario.value.limpeza == true ? "S" : "N"
      })
      .toPromise()
      .then(r => this.MostrarMensagem("Cômodo alterado!"))
      .catch(e => this.MostrarMensagem(e.message))
  }

  public RemoverComodo(): void {
    this._comodoService.delete(this.comodoSelecionado.id)
        .toPromise()
        .then(r => this.MostrarMensagem("Cômodo removido!"))
        .catch(e => this.MostrarMensagem(e.message))

    this.RemoverComodoLista(this.comodoSelecionado);
    this.comodoSelecionado = null;
  }

  public RemoverComodoLista(comodo: Comodo){
    this.comodos = this.comodos.filter(c => c.id != comodo.id)
  }

  public SelecionarComodo(evento: any): void{
    this.comodoSelecionado = evento.option.value;
    this.CarregarFormulario();
  }

  public AbrirCadastroComodo(): void{
    this.dialog.open(CriarComodoComponent)
      .afterClosed()
      .subscribe(r => {if(r) this.AdicionarComodo(r)});
  }
  //#endregion

  //#region MÉTODOS REFERENTES A MOVEL
  public CriarObjetoMovel(): Movel{
    return {
      id: 0,
      descricao: this.descricaoMovel.value,
      comodoId: this.comodoSelecionado.id,
      quantidade: this.quantidadeMovel.value
    }
  }

  public AdicionarMovel(): void{
    this._movelService.post(this.CriarObjetoMovel())
                      .toPromise()
                      .then(r => this.AdicionarMovelTabela(r))
                      .catch(e => this.MostrarMensagem(e.message))
  }

  public RemoverMovel(movel: Movel){
    this._movelService.delete(movel.id)
                      .toPromise()
                      .then(r => this.RemoverMovelTabela(movel))
                      .catch(e => this.MostrarMensagem(e.message))
  }

  public RemoverMovelTabela(movel: Movel): void{
    this.formulario.value.moveis = this.comodoSelecionado.moveis.filter(m => m.id != movel.id)
    this.comodoSelecionado.moveis = this.comodoSelecionado.moveis.filter(m => m.id != movel.id)
    this.comodoSelecionado.moveis = [...this.comodoSelecionado.moveis]
    this.MostrarMensagem("Movel removido")
  }

  public AdicionarMovelTabela(movel: Movel): void{
    this.comodoSelecionado.moveis.push(movel)
    this.comodoSelecionado.moveis = [...this.comodoSelecionado.moveis]
    this.MostrarMensagem("Movel adicionado")
  }

  //#endregion

  public MostrarMensagem(message: string): void{
    this._snackBar.open(message, "Fechar");
  }


}
