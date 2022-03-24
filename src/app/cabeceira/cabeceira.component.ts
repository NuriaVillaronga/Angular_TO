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

  constructor(private servizoProductos: ProductosService) {}

  cambiarIdioma(lang : any) {
    localStorage.setItem('lang',lang);
    window.location.reload();
  }

  ngOnInit(): void {
    this.idiomaSeleccionado = localStorage.getItem('lang') || 'gal';
    this.servizoProductos.servizoIdioma(this.idiomaSeleccionado);
    this.brand = this.servizoProductos.brand;
    this.placeholder = this.servizoProductos.placeholder;
    this.boton = this.servizoProductos.boton;
  }

}
