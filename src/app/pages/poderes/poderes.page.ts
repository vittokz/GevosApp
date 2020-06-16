import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Poder } from 'src/app/modelos/poderes-modelo';
import { PoderesService } from 'src/app/servicios/poderes/poderes.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-poderes',
  templateUrl: './poderes.page.html',
  styleUrls: ['./poderes.page.scss'],
})
export class PoderesPage implements OnInit {

  identidad: string;
  listaPoderes: Poder[];
  url: string = environment.url + 'poderes/img/';
  constructor(private rutaActiva: ActivatedRoute,private ruta: Router,private poderService: PoderesService) {
      this.identidad = this.rutaActiva.snapshot.paramMap.get('iden');
      this.cargarPoderes(this.identidad);
  }

  ngOnInit() {
  }

  cargarPoderes(identidad:string){
    this.poderService.getAllPoderesByIdentidad(identidad).subscribe(
      data=>{
          this.listaPoderes = data;
      }
    );
  }

  irMenu(){
    this.ruta.navigate(['/menu', this.identidad]);
  }

}
