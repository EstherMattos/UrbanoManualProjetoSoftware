import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Conta } from 'src/models/models';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private API = environment.API

  constructor(private http: HttpClient) { }

  public get_all(): Observable<Array<Conta>> {
    return this.http.get<Array<Conta>>(`${this.API}conta`)
  }

  public get(id: number): Observable<Conta>{
    return this.http.get<Conta>(`${this.API}conta/${id}`)
  }

  public post(conta: Conta): Observable<Conta>{
    return this.http.post<Conta>(`${this.API}conta`, conta)
  }

  public put(conta: Conta): Observable<void>{
    return this.http.put<void>(`${this.API}conta`, conta)
  }

  public delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.API}conta/${id}`)
  }

}
