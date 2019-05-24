import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule',
    canActivate: [AuthGuard]
  },
  { 
    path: 'calendario',
    loadChildren: './calendario/calendario.module#CalendarioPageModule'
  },
  { 
    path: 'fase-cheia', 
    loadChildren: './fase-cheia/fase-cheia.module#FaseCheiaPageModule' 
  },
  { path: 'cadastro', 
    loadChildren: './cadastro/cadastro.module#CadastroPageModule'
  },
  { path: 'fase-minguante', 
    loadChildren: './fase-minguante/fase-minguante.module#FaseMinguantePageModule'
  },
  { path: 'fase-crescente', 
    loadChildren: './fase-crescente/fase-crescente.module#FaseCrescentePageModule'
  },
  { path: 'fase-nova', 
    loadChildren: './fase-nova/fase-nova.module#FaseNovaPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
