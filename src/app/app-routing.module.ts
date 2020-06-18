import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'menu/:iden',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'perfil/:iden',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'ayuda/:iden',
    loadChildren: () => import('./pages/ayuda/ayuda.module').then( m => m.AyudaPageModule)
  },
  {
    path: 'procesos/:iden',
    loadChildren: () => import('./pages/procesos/procesos.module').then( m => m.ProcesosPageModule)
  },
  {
    path: 'contratos/:iden',
    loadChildren: () => import('./pages/contratos/contratos.module').then( m => m.ContratosPageModule)
  },
  {
    path: 'poderes/:iden',
    loadChildren: () => import('./pages/poderes/poderes.module').then( m => m.PoderesPageModule)
  },
  {
    path: 'procesos-actuaciones/:idProceso/:iden/:radicado',
    loadChildren: () => import('./pages/procesos-actuaciones/procesos-actuaciones.module').then( m => m.ProcesosActuacionesPageModule)
  },
  {
    path: 'alertas/:iden',
    loadChildren: () => import('./pages/alertas/alertas.module').then( m => m.AlertasPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
