import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comentario } from 'src/models/models';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private API = environment.API

  constructor(private http: HttpClient) { }

  public get_all(): Observable<Array<Comentario>> {
    return this.http.get<Array<Comentario>>(`${this.API}post`)
  }

  public post(comentario: Comentario): Observable<Comentario>{
    return this.http.post<Comentario>(`${this.API}post`, comentario)
  }
  
  public put(comentario: Comentario): Observable<Comentario>{
    return this.http.put<Comentario>(`${this.API}post/${comentario.id}`, comentario)
  }

  public delete(id: number): Observable<Comentario>{
    return this.http.delete<Comentario>(`${this.API}post/${id}`)
  }
}
