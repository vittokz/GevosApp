import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcesosService } from 'src/app/servicios/procesos/procesos.service';
import { Actuacion } from 'src/app/modelos/actuaciones-modelo';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-procesos-actuaciones',
  templateUrl: './procesos-actuaciones.page.html',
  styleUrls: ['./procesos-actuaciones.page.scss'],
})
export class ProcesosActuacionesPage implements OnInit {
  identidad: string;
  idProceso: string;
  listaActuaciones : Actuacion[];
  radicado: string;
  url: string = environment.url + 'actuaciones/img/';
  constructor(private rutaActiva: ActivatedRoute,private ruta: Router,private procesoService: ProcesosService) { 
    this.identidad = this.rutaActiva.snapshot.paramMap.get('iden');
    this.idProceso = this.rutaActiva.snapshot.paramMap.get('idProceso');
    this.radicado = this.rutaActiva.snapshot.paramMap.get('radicado');
    this.cargarActuaciones(this.idProceso);
  }

  ngOnInit() {
  }

  cargarActuaciones(idProceso: string){
    this.procesoService.getActuacionesByIdProceso(idProceso).subscribe(
      data=>{
          this.listaActuaciones = data;
          
      }
    );
  }

  irMenu(){
    this.ruta.navigate(['/menu', this.identidad]);
  }

  irProcesos(){
    this.ruta.navigate(['/procesos', this.identidad]);
  }

}
