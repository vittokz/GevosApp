import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Proceso } from 'src/app/modelos/procesos-modelo';
import { Juzgado } from 'src/app/modelos/juzgados-modelo';
import { Actuacion } from 'src/app/modelos/actuaciones-modelo';

@Injectable({
  providedIn: 'root'
})
export class ProcesosService {
  headers: any		= new HttpHeaders({ 'Content-Type': 'application/json' });
  url: string = environment.url + 'procesos/';
  url2: string = environment.url + '';
  constructor(private http: HttpClient) { }

  getProcesosByIdentidad(identidad:string): Observable<Proceso[]>{
    return this.http.get<Proceso[]>(this.url + 'getProcesosByIdentidad.php?identidad=' + identidad);
  }

  getJuzgadoByIdJuzgado(idJuzgado: string):Observable<Juzgado[]>{
    return this.http.get<Juzgado[]>(this.url + 'getJuzgadoByIdJuzgado.php?idJuzgado=' + idJuzgado);
 }

 getActuacionesByIdProceso(idProceso:string): Observable<Actuacion[]>{
  return this.http.get<Actuacion[]>(this.url2 + 'actuaciones/getActuacionesByIdProceso.php?idProceso=' + idProceso);
}
}