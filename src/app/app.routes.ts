import { Routes } from '@angular/router';
import {LoginComponent} from "./formulario/login/login.component";
import {HomeComponent} from "./home/home.component";
import {ErrorComponent} from "./error/error.component";
import {PerrosComponent} from "./perros/perros.component";
import {RegisterComponent} from "./formulario/register/register.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
  path: "home",
    component:HomeComponent
  },
  {
    path: "perros",
    component:PerrosComponent
  },
  {
  path: "login",
    component:LoginComponent
  },
  {path: "register",
  component:RegisterComponent},
  {
    path: "**",
    component: ErrorComponent
  }
];
