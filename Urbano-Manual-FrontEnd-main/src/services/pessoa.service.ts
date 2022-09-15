import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pessoa, Residencia } from 'src/models/models';
import { InfoUser } from 'src/global/global';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private API = environment.API

  constructor(private http: HttpClient) { }

  async AtualizarUsuarioLogado(): Promise<void>{
    await this.get(InfoUser.Usuario.id)
              .toPromise()
              .then(r => InfoUser.InserirUsuario(r))
  }

  public get_all(): Observable<Array<Pessoa>> {
    return this.http.get<Array<Pessoa>>(`${this.API}pessoa`)
  }

  public get(id: number): Observable<Pessoa>{
    return this.http.get<Pessoa>(`${this.API}pessoa/${id}`)
  }

  public post(pessoa: Pessoa): Observable<void>{
    return this.http.post<void>(`${this.API}pessoa`, pessoa)
  }

  public put(pessoa: Pessoa): Observable<void>{
    return this.http.put<void>(`${this.API}pessoa/${pessoa.id}`, pessoa)
  }

  public delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.API}pessoa/${id}`)
  }

}
