import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})

export class OfertasComponent implements OnInit {

  productosOferta: Producto[][];

  constructor(public servizoProductos: ProductosService) {}

  ngOnInit(): void {
      this.productosOferta = this.servizoProductos.obterListadoOfertas();
  }

}

export interface Producto {
  nome: string;
  prezo: number;
  imaxe: string;
  descricion: string;
}
