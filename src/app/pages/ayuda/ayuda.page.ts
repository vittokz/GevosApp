import { SoporteService } from './../../servicios/soporte/soporte.service';
import { Soporte } from './../../modelos/soporte-modelo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/servicios/cliente/cliente.service';
import { Cliente } from 'src/app/modelos/cliente-modelo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.page.html',
  styleUrls: ['./ayuda.page.scss'],
})
export class AyudaPage implements OnInit {
  identidad: string;
  datosCliente: Cliente[];
  formAtencion: FormGroup;
  nuevoSoporte: Soporte = new Soporte();
  constructor(private rutaActiva: ActivatedRoute, private clienteService: ClienteService,
    private ruta: Router,private formBuilder: FormBuilder,public alertCtl: AlertController,
    private soporteService: SoporteService) {
      this.identidad = this.rutaActiva.snapshot.paramMap.get('iden');
      this.cargarCliente(this.identidad);
      this.crearFormulario();
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

  crearFormulario(){
    this.formAtencion = this.formBuilder.group({
      descripcion: ['', Validators.required]
    });
  }

  async alertaEnvio() {
    const alert = await this.alertCtl.create({
      header: 'GevosColombia App',
      subHeader: '',
      message: 'Se envío su solicitud correctamente.',
      buttons: ['OK']
    });

    await alert.present();
  }

  enviar(){
    const form = this.formAtencion.value;
    this.nuevoSoporte.descripcion = form.descripcion;
    this.nuevoSoporte.estado = "Pendiente";
    this.nuevoSoporte.usuarioRegistro = this.identidad;
    this.soporteService.addSoporte(this.nuevoSoporte).subscribe(
      data => {
         if(data["resul"] > 0){
           this.alertaEnvio();
           this.formAtencion.reset();
         }
         else{
           
         }
      }
    );
  }

  irMenu(){
    this.ruta.navigate(['/menu', this.identidad]);
  }
}
