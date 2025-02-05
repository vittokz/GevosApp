import { AuthService } from './../../servicios/auth-user/auth.service';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PushService } from 'src/app/servicios/push/push.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  formLogin : FormGroup;
  logueado: string;
  constructor(private formBuilder: FormBuilder, private authService: AuthService, 
    private router: Router, public alertCtl: AlertController) {
      this.crearFormulario();
    }

  async alertaIngreso() {
    const alert = await this.alertCtl.create({
      header: 'GevosColombia App',
      subHeader: '',
      message: 'Bienvenido a nuestra App',
      buttons: ['OK']
    });

    await alert.present();
  }

  async alertaError() {
    const alert = await this.alertCtl.create({
      header: 'Gevos Colombia App',
      subHeader: '',
      message: 'Sus datos son incorrectos',
      buttons: ['OK']
    });

    await alert.present();
  }

  crearFormulario(){
    this.formLogin = this.formBuilder.group({
      identidad: ['', Validators.required],
      clave: ['', Validators.required]
    });
  }

  login(){
    const form = this.formLogin.value;
    this.authService.loginUser(form.identidad, form.clave).subscribe(
      data => {
         if(data["resul"] >0){
           this.alertaIngreso();
           this.router.navigate(['/menu', form.identidad]);
         }
         else{
          this.alertaError();
         }
      }
    );
  }

}
