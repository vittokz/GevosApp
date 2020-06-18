import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform, AlertController, IonicModule} from '@ionic/angular';
import { FCM } from '@ionic-native/fcm/ngx';
import { PushService } from 'src/app/servicios/push/push.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  identidad: string;
  constructor(private rutaActiva: ActivatedRoute, private platform: Platform,
    public alert: AlertController, private fcm: FCM,
    private pushService: PushService) {
      this.identidad = this.rutaActiva.snapshot.paramMap.get('iden');
  }

  ngOnInit() {
    this.pushService.guardarUserId(this.identidad);
   /* this.fcm.getToken().then(token => {
     console.log(token);
    });
    */
  }


  async salir(){
    const alert = await this.alert.create({
      header: 'GevosColombia App',
      subHeader: '',
      message: 'Desea salir de la App?',
      buttons: [{
        text: "Salir?",
        handler: () => { this.exitApp() }
      }, {
        text: "Cancelar",
        role: 'cancel'
      }]
    });
    await alert.present();
}

  exitApp(){
    navigator['app'].exitApp();
 }

}
