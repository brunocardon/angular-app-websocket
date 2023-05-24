import { NgModule } from '@angular/core';
import { RouterModule, Routes, NoPreloading } from '@angular/router';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path: 'home', loadChildren: () => import('./views/home/home.module').then( m => m.HomeModule) },
  { path: 'product', loadChildren: () => import('./views/product/product.module').then( m => m.ProductModule) },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
