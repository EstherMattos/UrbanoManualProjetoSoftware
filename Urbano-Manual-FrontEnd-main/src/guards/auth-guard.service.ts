import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Rotas } from 'src/enum/enum';
import { InfoUser } from 'src/global/global';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, 
              state: RouterStateSnapshot): boolean  
              
  {
    if(InfoUser.UsuarioAutenticado())
      return true

      this._router.navigate(([`${Rotas.Login}`]))
    return false
    
  }
}