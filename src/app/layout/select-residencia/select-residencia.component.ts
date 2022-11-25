import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoUser } from 'src/global/global';
import { Residencia } from 'src/models/models';
import { PessoaService } from 'src/services/pessoa.service';

@Component({
  selector: 'app-select-residencia',
  templateUrl: './select-residencia.component.html',
  styleUrls: ['./select-residencia.component.scss']
})
export class SelectResidenciaComponent implements OnInit {

  public residencias: Residencia[] = InfoUser.Usuario.residencias;
  public residenciaSelecionada = InfoUser.ResidenciaSelecionada

  constructor(private _router: Router,
              private _pessoaService: PessoaService) {

  }

  ngOnInit(): void {
    
  }

  async SelecionarResidencia(residencia: Residencia): Promise<void>{
    await this._pessoaService.AtualizarUsuarioLogado();
    InfoUser.InserirResidencia(InfoUser.Usuario.residencias.filter(r => r.id == residencia.id)[0]);
    this.Refresh()
  }

  public Refresh(): void {

    const currentRoute = this._router.url;

    this._router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this._router.navigate([currentRoute]);
    }); 

  }
}
