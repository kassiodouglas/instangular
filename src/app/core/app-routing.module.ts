import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Router } from './Router';
import '../routes';



const routes: Routes = Router.routes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
