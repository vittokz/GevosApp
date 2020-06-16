import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers: any		= new HttpHeaders({ 'Content-Type': 'application/json' });
  url: string = environment.url + 'auth-user/';
  constructor(private http: HttpClient) { }

  loginUser(identidad:string, clave: string): Observable<any>{
    let options: any = {
      'identidad': identidad,
      'clave': clave,
      
    };
    return this.http.post(this.url + 'loginUser.php',JSON.stringify(options), this.headers);
  }

  cambiarClave(identidad:string, clave: string): Observable<any>{
     let options: any = {
       'identidad': identidad,
       'clave': clave
     };
     return this.http.post(this.url + 'cambiarClave.php',JSON.stringify(options),this.headers);
  }

  getTipoUsuario(identidad: string): Observable<any>{
    return this.http.get(this.url + 'getTipoUser.php?identidad=' + identidad);
  }

  getAccesos(tipoUsuario: string): Observable<any[]>{
    return this.http.get<any[]>(this.url + 'getAccesos.php?tipoUsuario=' + tipoUsuario);
  }

 //almacenamiento del ingreso en storage
  setUser(user): void{
    let user_string = JSON.stringify(user);
    localStorage.setItem('currentUser', user_string);
 }

 setToken(token):void{
   localStorage.setItem('accesToken',token);
 }

 getToken(){
   localStorage.getItem('accesToken');
 }

 //recuperar el usuario que esta logueado
 getCurrentUser(){
   let user_logeado= localStorage.getItem('currentUser');
    if(!isNullOrUndefined(user_logeado)){
       let user = JSON.parse(user_logeado);
       return user;
     }else{
       return null;
     }
 }

 logoutUser(){
   let accessToken = localStorage.getItem('accesToken');
   localStorage.removeItem('accesToken');
   localStorage.removeItem('currentUser');
 }

}