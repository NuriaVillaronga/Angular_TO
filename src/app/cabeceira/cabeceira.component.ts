import { Component, OnInit} from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-cabeceira',
  templateUrl: './cabeceira.component.html',
  styleUrls: ['./cabeceira.component.css']
})

export class CabeceiraComponent implements OnInit {

  idiomaSeleccionado : string;
  brand : string;
  placeholder : string;
  boton : string;
  servizo : ProductosService;

  constructor(public servizoProductos: ProductosService) {
      this.servizo = servizoProductos;
      this.idiomaSeleccionado = servizoProductos.idioma;
      this.brand = servizoProductos.brand;
      this.placeholder = servizoProductos.placeholder;
      this.boton = servizoProductos.boton;
  }

  cambiarIdioma(idioma : string, servizoProductos: ProductosService) {
    this.idiomaSeleccionado = idioma;
    
    servizoProductos.servizoIdioma(this.idiomaSeleccionado);
    this.brand = servizoProductos.brand;
    this.placeholder = servizoProductos.placeholder;
    this.boton = servizoProductos.boton; 
  }

  ngOnInit(): void {
  }

}
