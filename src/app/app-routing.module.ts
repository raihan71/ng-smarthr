import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },
  { path: '', loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, {
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
