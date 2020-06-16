import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/modelos/cliente-modelo';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url: string = environment.url + 'usuariosPagina/';
  constructor(private http: HttpClient) { }

  getUsuarioByIdentidad(identidad: string): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url + 'getUserByIdentidad.php?identidad=' + identidad);
   }

}
