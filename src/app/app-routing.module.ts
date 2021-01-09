import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarsComponent } from './stars/stars.component';
import { AddStarComponent } from './add-star/add-star.component';
import { UpdateStarComponent } from './update-star/update-star.component';
const routes: Routes = [
  {path : "stars", component : StarsComponent},
  {path : "add-star", component : AddStarComponent},
  {path : "updateStar/:id", component : UpdateStarComponent},
  {path : "" , redirectTo : "stars" , pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
