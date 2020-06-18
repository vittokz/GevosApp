import { Injectable, EventEmitter } from '@angular/core';
import { OneSignal, OSNotification, OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Storage } from '@ionic/storage';
@Injectable({
  providedIn: 'root'
})
export class PushService {
  notificaciones: Notification[];
  mensajes :OSNotificationPayload[] = [];
  user_id : string;
  pushListener= new EventEmitter<OSNotificationPayload>();
  headers 	: any		= new HttpHeaders({ 'Content-Type': 'application/json' });
  url: string = environment.url + 'notificaciones/';
  constructor(private oneSignal: OneSignal, private http: HttpClient,
              private storage: Storage) {
                this.cargarMensajes();
               }
  
  getAllNotificaciones(identidad: string): Observable<Notification[]>{
    return this.http.get<Notification[]>(this.url + 'getNotificaciones.php?identidad=' + identidad);
  }

  async getMensajes(){
     await this.cargarMensajes();
     return [...this.mensajes];
  }
  

  configuracionInicial(){
    this.oneSignal.startInit('bcd71f9d-3b36-42aa-8fe4-41a1c1ed2e8a', '717249640006');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
    // que hacer notificacion recibida
      console.log('Notificacion recibida', noti);
      this.notificacionRecibida(noti);
    });
    this.oneSignal.handleNotificationOpened().subscribe(async (noti) => {
       // que hacer por notificacion abierta
       await this.notificacionRecibida(noti.notification);
    });
    //obtener id del subscriptor
    this.oneSignal.getIds().then(
      info=>{
        this.user_id = info.userId;
       // this.guardarUserId(this.user_id);
      }
    );
    this.oneSignal.endInit();
  }

    guardarUserId(identidad: string){
      let options: any = {
          'identidad': identidad,
          'userId': this.user_id
      };
       this.http.post(this.url + 'guardarUserId.php', JSON.stringify(options), this.headers);
    }

  async notificacionRecibida(noti: OSNotification){
     await this.cargarMensajes();
     const payLoad = noti.payload;
     const existePush = this.mensajes.find(mensaje=> mensaje.notificationID === payLoad.notificationID);
      if(existePush){
        return;
      }

      this.mensajes.unshift(payLoad);
      this.pushListener.emit(payLoad);
      await this.guardarMensajes();
    }

    guardarMensajes(){
      this.storage.set('mensajes', this.mensajes);
    }

    async cargarMensajes(){
      this.storage.clear();
      this.mensajes = await this.storage.get('mensajes') || [];
      return this.mensajes;
    }
}
