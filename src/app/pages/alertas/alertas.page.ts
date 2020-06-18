import { Component, OnInit, ApplicationRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { PushService } from 'src/app/servicios/push/push.service';
import { OSNotificationPayload } from '@ionic-native/onesignal/ngx';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
})
export class AlertasPage implements OnInit {
  identidad: string;
  listaNoti: Notification[];
  mensajes: OSNotificationPayload[]=[];
  constructor(private rutaActiva: ActivatedRoute,private ruta: Router,private pushService: PushService,
    private aplicationRef: ApplicationRef) {
      this.identidad = this.rutaActiva.snapshot.paramMap.get('iden');
      this.cargarNotificaciones(this.identidad);
  }

  
  ngOnInit() {
    this.pushService.pushListener.subscribe(
      noti=>{
        this.mensajes.unshift(noti);
        this.aplicationRef.tick();
      }
    )
  }

  async ionViewWillEnter(){
     this.mensajes = await this.pushService.getMensajes();
  }

  cargarNotificaciones(identidad: string){
    this.pushService.getAllNotificaciones(identidad).subscribe(
      data=>{
          this.listaNoti = data;
      }
    );
  }

  irMenu(){
    this.ruta.navigate(['/menu', this.identidad]);
  }

}
