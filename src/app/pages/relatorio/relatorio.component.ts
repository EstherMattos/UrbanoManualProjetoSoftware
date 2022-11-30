import { Component, OnInit } from '@angular/core';
import { InfoUser } from 'src/global/global';
import { Renda, Residencia, Conta, Produto} from 'src/models/models';
import { jsPDF } from "jspdf";
import { ElementRef, ViewChild } from '@angular/core';

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
    public DadosUser: Array<Object> = [];
    usuarioNome: string;
    usuarioCpf: string;
    usuarioResidenciaAtual: string;

    @ViewChild('content', {static: false}) el: ElementRef;

    constructor() { }
  
    ngOnInit(): void {
      console.log(InfoUser);
      this.ListaEnderecos = InfoUser.Usuario.residencias.map(r => r.endereco);
      this.ListaRendas = InfoUser.Usuario.rendas;
      this.ListaContas = InfoUser.Usuario.residencias.map(r => r.contas)[0]; 
      this.DadosUser[0] = InfoUser;   
    }

    printPDF(){
      let pdf = new jsPDF('p', 'pt', 'a4');
      pdf.html(this.el.nativeElement, {
        callback: (pdf) => {
          pdf.save("relatorio.pdf");
        }
      })
    }
  }