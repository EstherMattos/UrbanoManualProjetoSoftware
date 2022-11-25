import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TipoConta } from 'src/enum/enum';
import { InfoUser } from 'src/global/global';
import { Estoque, Produto } from 'src/models/models';
import { ContaService } from 'src/services/conta.service';
import { EstoqueService } from 'src/services/estoque.service';
import { PessoaService } from 'src/services/pessoa.service';
import { ProdutoService } from 'src/services/produto.service';

export interface ProdutoEstoque extends Produto {
  quantidade: number
}

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})
export class EstoqueComponent implements OnInit {

  public descricaoProduto = new FormControl('');
  public valorProduto = new FormControl('');

  public colunas: String[] = ['quantidade', 'nome', 'valorUnitario', 'valorTotal', 'btnRemover']

  public registros: ProdutoEstoque[] = []

  public estoque: Estoque = null;

  constructor(private _estoqueService: EstoqueService,
              private _produtoService: ProdutoService,
              private _pessoaService: PessoaService,
              private _contaService: ContaService,
              private _snackBar: MatSnackBar) { }

  async ngOnInit(): Promise<void> {
    await this._pessoaService.AtualizarUsuarioLogado();
    this.GerarListaProdutos();
  }   

  public GerarListaProdutos(){
    this.estoque = InfoUser.ResidenciaSelecionada.estoque;

    this.registros = InfoUser.ResidenciaSelecionada.estoque.produtos.map(p => {
      return {
        ...p,
        quantidade: 1
      }
    })
  }

  //#region MÉTODOS DE ADIÇÃO E REMOÇÃO DE PRODUTO
  public CriarObjetoProduto(): Produto{
    return {
      id: 0,
      estoqueId: this.estoque.id,
      nome: this.descricaoProduto.value,
      valorUnitario: this.valorProduto.value
    }
  }

  public AdicionarProduto(): void{
    this._produtoService.post(this.CriarObjetoProduto())
                        .toPromise()
                        .then(r => this.AdicionarProdutoTabela(r))
                        .catch(e => this.MostrarMensagem(e.message))
  }

  public AdicionarProdutoTabela(produto: Produto){
    this.registros.push({
      ...produto,
      quantidade: 1,
    })

    this.registros = [...this.registros]
    this.LimparCampos();
    this.MostrarMensagem("Produto adicionado!");
  }

  public RemoverProduto(produto: Produto): void{
    this._produtoService.delete(produto.id)
                        .toPromise()
                        .then(r => this.RemoverProdutoTabela(produto))
                        .catch(e => this.MostrarMensagem(e.message))
  }

  public RemoverProdutoTabela(produto: Produto): void{
    this.registros = this.registros.filter(r => r.id != produto.id)
    this.registros = [...this.registros]
    this.MostrarMensagem("Produto removido!")
  }

  //#endregion

  //#region MÉTODOS DE CALCULO
  public AlterarQuantidade(quantidade: number, index: number){
    this.registros[index].quantidade = quantidade;
    this.registros = [...this.registros]
  }

  public SomaValorLinha(index: number): number{
    return parseFloat((this.registros[index].quantidade * this.registros[index].valorUnitario).toFixed(2));
  }

  public SomaTotal(): number{
    return this.registros.map((r, i) => this.SomaValorLinha(i)).reduce((acc, value) => acc + value, 0);
  }
  //#endregion

  public GerarConta(): void{
    this._contaService.post({
      id: 0,
      descricao: 'Repor estoque',
      residenciaId: InfoUser.ResidenciaSelecionada.id,
      tipo: TipoConta.VARIAVEL,
      valor: this.SomaTotal()      
    })
    .toPromise()
    .then(r => this.MostrarMensagem("Conta gerada!"))
    .catch(e => this.MostrarMensagem(e.message))
  }

  public MostrarMensagem(message: string) {
    this._snackBar.open(message, "Fechar");
  }

  public LimparCampos(): void{
    this.descricaoProduto.patchValue("")
    this.valorProduto.patchValue("")
  }
  

}
