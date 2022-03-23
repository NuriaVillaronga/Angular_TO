import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceiraComponent } from './cabeceira/cabeceira.component';
import { MaisVendidosComponent } from './mais-vendidos/mais-vendidos.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProductosService } from './productos.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceiraComponent,
    MaisVendidosComponent,
    OfertasComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
