import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Residencia } from 'src/models/models';

@Injectable({
  providedIn: 'root'
})
export class ResidenciaService {

  private API = environment.API

  constructor(private http: HttpClient) { }

  public get_all(): Observable<Array<Residencia>> {
    return this.http.get<Array<Residencia>>(`${this.API}Residencia`)
  }

  public get(id: number): Observable<Residencia>{
    return this.http.get<Residencia>(`${this.API}Residencia/${id}`)
  }

  public post(residencia: Residencia): Observable<void>{
    return this.http.post<void>(`${this.API}Residencia`, residencia)
  }

  public put(residencia: Residencia): Observable<void>{
    return this.http.put<void>(`${this.API}Residencia`, residencia)
  }

  public delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.API}Residencia/${id}`)
  }

}
