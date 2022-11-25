import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Renda } from 'src/models/models';

@Injectable({
  providedIn: 'root'
})
export class RendaService {

  private API = environment.API

  constructor(private http: HttpClient) { }

  public get_all(): Observable<Array<Renda>> {
    return this.http.get<Array<Renda>>(`${this.API}Renda`)
  }

  public get(id: number): Observable<Renda>{
    return this.http.get<Renda>(`${this.API}Renda/${id}`)
  }

  public post(renda: Renda): Observable<void>{
    return this.http.post<void>(`${this.API}Renda`, renda)
  }

  public put(renda: Renda): Observable<void>{
    return this.http.put<void>(`${this.API}Renda`, renda)
  }

  public delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.API}Renda/${id}`)
  }

}
