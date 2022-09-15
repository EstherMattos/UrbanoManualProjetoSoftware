import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comodo } from 'src/models/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComodoService {

  private API = environment.API

  constructor(private http: HttpClient) { }

  public get_all(): Observable<Array<Comodo>> {
    return this.http.get<Array<Comodo>>(`${this.API}comodo`)
  }

  public get(id: number): Observable<Comodo>{
    return this.http.get<Comodo>(`${this.API}comodo/${id}`)
  }

  public post(comodo: Comodo): Observable<Comodo>{
    return this.http.post<Comodo>(`${this.API}comodo`, comodo)
  }

  public put(comodo: Comodo): Observable<void>{
    return this.http.put<void>(`${this.API}comodo/${comodo.id}`, comodo)
  }

  public delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.API}comodo/${id}`)
  }
  
}
