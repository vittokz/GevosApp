import { ClienteService } from './../../servicios/cliente/cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/modelos/cliente-modelo';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  identidad: string;
  datosCliente: Cliente[];
  constructor(private rutaActiva: ActivatedRoute, private clienteService: ClienteService,
    private ruta: Router) {
      this.identidad = this.rutaActiva.snapshot.paramMap.get('iden');
      this.cargarCliente(this.identidad);
  }

  ngOnInit() {
  }

  cargarCliente(identidad: string){
    this.clienteService.getUsuarioByIdentidad(identidad).subscribe(
      data => {
        this.datosCliente= data;
      }
    );
  }

  irMenu(){
    this.ruta.navigate(['/menu', this.identidad]);
  }

}
