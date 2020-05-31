import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RestaurantListComponent} from './restaurant-list/restaurant-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
  path: 'restaurants',
  component: RestaurantListComponent,
  pathMatch: 'full',
  data:{title : 'Restaurants' }
},{
  path: '',
  component: HomeComponent,
  pathMatch: 'full',
  data:{title : 'Home' }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
