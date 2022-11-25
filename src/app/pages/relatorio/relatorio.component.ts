import { Component, OnInit } from '@angular/core';
import { InfoUser } from 'src/global/global';
import { Renda, Residencia } from 'src/models/models';

@Component({
    selector: 'app-relatorio',
    templateUrl: './relatorio.component.html',
    styleUrls: ['./relatorio.component.scss']
  })
  export class RelatorioComponent implements OnInit {
    public ListaEnderecos: String[] = InfoUser.Usuario.residencias.map(r => r.endereco)
    public ListaRendas: Renda[] = InfoUser.Usuario.rendas

    ngOnInit(): void {
    }
  }