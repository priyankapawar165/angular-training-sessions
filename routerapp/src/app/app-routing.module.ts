import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'first', component:FirstComponent},
  {path:'second', component:SecondComponent},
  {path:'three', component:ThreeComponent},
  {path:'four', component:FourComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
