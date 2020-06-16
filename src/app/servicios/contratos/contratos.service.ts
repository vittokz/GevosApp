import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contrato } from 'src/app/modelos/contratos-modelo';

@Injectable({
  providedIn: 'root'
})
export class ContratosService {
  headers: any		= new HttpHeaders({ 'Content-Type': 'application/json' });
  url: string = environment.url + 'contratos/';

  constructor(private http: HttpClient) { }

  getAllContratosByIdentidad(identidad: string): Observable<Contrato[]>{
     return this.http.get<Contrato[]>(this.url + 'getAllContratosByIdentidad.php?identidad=' + identidad);
  }

}
