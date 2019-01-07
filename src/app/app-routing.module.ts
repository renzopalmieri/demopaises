import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemopaisComponent } from './demopais/demopais.component';



const routes: Routes = [
  { path: '',  component: DemopaisComponent },
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {


 }
