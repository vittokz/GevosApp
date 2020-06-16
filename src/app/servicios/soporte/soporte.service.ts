import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Soporte } from 'src/app/modelos/soporte-modelo';

@Injectable({
  providedIn: 'root'
})
export class SoporteService {
  headers: any		= new HttpHeaders({ 'Content-Type': 'application/json' });
  url: string = environment.url + 'soporte/';
  constructor(private http: HttpClient) { }

  addSoporte(nuevaSolicitud: Soporte): Observable<any>{
     let options : any = {
         'descripcion': nuevaSolicitud.descripcion,
         'estado': nuevaSolicitud.estado,
         'usuarioRegistro': nuevaSolicitud.usuarioRegistro
     };
     return this.http.post(this.url + 'addSoporte.php', JSON.stringify(options), this.headers);
  }

}