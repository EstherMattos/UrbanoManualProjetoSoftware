import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rotas } from 'src/enum/enum';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  public rotaUsuario: Rotas = Rotas.Usuario;
  public rotaLogin: Rotas.Login;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  public redirect(){
    this._router.navigate([Rotas.Login])
  }

}
