import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {CustomerComponent} from "./customers/customer";
import {ProjectEntryComponent} from "./project-entry/NewPageComponent";
import {MainPageComponent} from "./navigation/MainPageNav";

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ProjectEntryComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
