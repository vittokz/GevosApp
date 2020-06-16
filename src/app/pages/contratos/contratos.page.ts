import { Contrato } from './../../modelos/contratos-modelo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContratosService } from 'src/app/servicios/contratos/contratos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.page.html',
  styleUrls: ['./contratos.page.scss'],
})
export class ContratosPage implements OnInit {

  identidad: string;
  listaContratos: Contrato[];
  url: string = environment.url + 'contratos/img/';
  constructor(private rutaActiva: ActivatedRoute,private ruta: Router,private contratoService: ContratosService) {
      this.identidad = this.rutaActiva.snapshot.paramMap.get('iden');
      this.cargarContratos(this.identidad);
  }
  ngOnInit() {
  }

  cargarContratos(identidad: string){
    this.contratoService.getAllContratosByIdentidad(identidad).subscribe(
      data=>{
          this.listaContratos = data;
      }
    );
  }

  irMenu(){
    this.ruta.navigate(['/menu', this.identidad]);
  }

}
