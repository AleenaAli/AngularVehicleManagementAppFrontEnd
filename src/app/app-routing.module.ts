import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { FetchDataComponent } from './components/fetch-data/fetch-data.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ViewVehicleComponent } from './components/view-vehicle/view-vehicle.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './components/admin.component';
import { AdminAuthGuard } from './services/admin.auth.guard.service';


const routes: Routes = [
  {path: '', redirectTo: 'app-root', pathMatch: 'full'},
  {path: 'navbar', redirectTo: 'NavBarComponent'},
  {path: 'vehicles/edit/:id', component: VehicleFormComponent, canActivate:[AuthGuard]},
  {path: 'vehicles/view/:id', component: ViewVehicleComponent},
  {path: 'vehicles', component: VehicleListComponent},
  {path: 'vehicles/new', component: VehicleFormComponent, canActivate:[AuthGuard]},
  {path: 'home', component: HomeComponent},
  {path: 'counter', component: CounterComponent},
  {path: 'fetchdata', component: FetchDataComponent},
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {path:'admin',component:AdminComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
