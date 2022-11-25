import { Component, OnInit } from '@angular/core';
import { InfoUser } from 'src/global/global';
import { Renda, Residencia, Conta, Produto } from 'src/models/models';

@Component({
    selector: 'app-relatorio',
    templateUrl: './relatorio.component.html',
    styleUrls: ['./relatorio.component.scss']
  })
  export class RelatorioComponent implements OnInit {
    public ListaEnderecos: String[];
    public ListaRendas: Array<Renda> = [];
    public ListaContas: Array<Conta> = [];
    public ListaProdutos: Array<Produto> = [];
    constructor() { }
  
    ngOnInit(): void {
      this.ListaEnderecos = InfoUser.Usuario.residencias.map(r => r.endereco);
      this.ListaRendas = InfoUser.Usuario.rendas;
      this.ListaContas = InfoUser.Usuario.residencias.map(r => r.contas)[0];
      this.ListaProdutos = InfoUser.Usuario.residencias.map(r => r.estoque.produtos)[0];
      console.log(this.ListaProdutos);
      console.log(InfoUser.Usuario);
    }
    
  }