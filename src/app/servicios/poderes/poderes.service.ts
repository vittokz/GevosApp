import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poder } from 'src/app/modelos/poderes-modelo';

@Injectable({
  providedIn: 'root'
})
export class PoderesService {
  headers: any		= new HttpHeaders({ 'Content-Type': 'application/json' });
  url: string = environment.url + 'poderes/';

  constructor(private http: HttpClient) { }
  
  getAllPoderesByIdentidad(identidad: string): Observable<Poder[]>{
     return this.http.get<Poder[]>(this.url + 'getAllPoderesByIdentidad.php?identidad=' + identidad);
  }

}
