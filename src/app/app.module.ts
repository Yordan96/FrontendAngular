import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ProductoComponent} from './productos/producto.component';
import {RouterModule, Routes} from '@angular/router';
import {ProductosService} from './services/productos.service';
import {HttpModule} from '@angular/http';
import {PreguntaComponent} from "./preguntas/preguntas.component";
import {PreguntasService} from "./services/preguntas.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const appRoutes: Routes = [
    {path: '', component:AppComponent},
    {path: 'productos', component:ProductoComponent},
    {path: 'preguntas', component:PreguntaComponent},

]
@NgModule({
  declarations: [
    AppComponent,
      ProductoComponent,
      PreguntaComponent,
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(appRoutes),
      HttpModule,
      FormsModule,
      ReactiveFormsModule

  ],
  providers: [ProductosService, PreguntasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
