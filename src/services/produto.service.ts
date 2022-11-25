import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produto } from 'src/models/models';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private API = environment.API

  constructor(private http: HttpClient) { }

  public delete(id: number): Observable<Produto>{
    return this.http.delete<Produto>(`${this.API}produto/${id}`)
  }

  public post(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(`${this.API}produto`, produto)
  }
  
}
