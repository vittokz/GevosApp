
import { Juzgado } from 'src/app/modelos/juzgados-modelo';
import { ProcesosService } from './../../servicios/procesos/procesos.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { Proceso } from 'src/app/modelos/procesos-modelo';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-procesos',
  templateUrl: './procesos.page.html',
  styleUrls: ['./procesos.page.scss'],
})
export class ProcesosPage implements OnInit {

  identidad: string;
  listaProcesos: Proceso[];
  juzgadoSelec: Juzgado[];
  nomJuzgado: string;
  
  url: string = environment.url + 'procesos/img/';
  constructor(private rutaActiva: ActivatedRoute,private ruta: Router,private procesoService: ProcesosService,
    public actionSheetController: ActionSheetController) {
      this.identidad = this.rutaActiva.snapshot.paramMap.get('iden');
      this.cargarProcesos(this.identidad);
  }
  ngOnInit() {
  }

  cargarProcesos(identidad: string){
    this.procesoService.getProcesosByIdentidad(identidad).subscribe(
      data=>{
          this.listaProcesos = data;
      }
    );
  }

  irMenu(){
    this.ruta.navigate(['/menu', this.identidad]);
  }

  async cargarVistaProceso(nombreJuzgado: string, procesoSel: Proceso){
    const actionSheet = await this.actionSheetController.create({
      header: 'Información del Proceso',
      buttons: [{
        text: "Radicado:\n" + procesoSel.radicado,
        role: 'destructive',
        icon: '',
        cssClass: 'fondoAyuda',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: "Juzgado:\n" + this.nomJuzgado,
        icon: '',
        cssClass: 'fondoAyuda',
        handler: () => {
          console.log('Share clicked');
        }
      },{
        text: "Demandado:\n" + procesoSel.demandado.substr(0,38)+"..",
        icon: '',
        cssClass: 'fondoAyuda',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: "Demandante:\n" + procesoSel.demandante.substr(0,38)+"..",
        icon: '',
        cssClass: 'fondoAyuda',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: "Fecha Registro:\n" + procesoSel.fechaRegistro,
        icon: '',
        cssClass: 'fondoAyuda',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }


  async infoProceso(procesoSel: Proceso) {
    this.procesoService.getJuzgadoByIdJuzgado(procesoSel.juzgado).subscribe(
      data=>{
           this.juzgadoSelec = data;
           this.nomJuzgado = this.juzgadoSelec[0].nombre;  
           this.cargarVistaProceso(this.nomJuzgado,procesoSel);     
      }
    );
    
  }

}
