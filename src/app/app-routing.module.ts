import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {CustomerComponent} from "./customers/customer";
import {ProjectEntryComponent} from "./project-entry/NewPageComponent";
import {MainPageComponent} from "./navigation/MainPageNav";

const appRoutes: Route[] = [
  {path: 'customers', component: CustomerComponent, outlet: 'navPage'},
  {path: 'mainNavPage', component: MainPageComponent,},
  {path: 'project-entry', component: ProjectEntryComponent},
  {path: '', redirectTo: '/project-entry', pathMatch: 'full'},
  {path: 'products', redirectTo: '/project-entry', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
