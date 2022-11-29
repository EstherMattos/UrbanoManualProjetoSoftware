import { Component, OnInit } from '@angular/core';
import { InfoUser } from 'src/global/global';
import { Renda, Residencia, Conta, Produto } from 'src/models/models';
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

    @ViewChild('content', {static: false}) el: ElementRef;

    constructor() { }
  
    ngOnInit(): void {

      this.ListaEnderecos = InfoUser.Usuario.residencias.map(r => r.endereco);
      this.ListaRendas = InfoUser.Usuario.rendas;
      this.ListaContas = InfoUser.Usuario.residencias.map(r => r.contas)[0];
      this.ListaProdutos = InfoUser.Usuario.residencias.map(r => r.estoque.produtos)[0];
    }
    printSimplePDF(){
      const doc = new jsPDF();
      doc.text("Hello world!", 10, 10);
      doc.save("a4.pdf"); 
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