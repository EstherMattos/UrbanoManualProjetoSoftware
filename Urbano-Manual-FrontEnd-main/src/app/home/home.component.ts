import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rotas } from 'src/enum/enum';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router) {
    this._router.navigate([`../${Rotas.Principal}`])
  }

  ngOnInit(): void {
  }

}
