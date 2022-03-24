import { Injectable } from '@angular/core';
import produtos from '../assets/produtos.json';
import produtosPor from '../assets/produtosPor.json';

@Injectable({
    providedIn: 'root'
})

export class ProductosService {

  idioma : string;
  productos : Producto[][];
  productosOfertas : Producto[][];
  brand : string;
  placeholder : string;
  boton : string;
  ofertas : string;
  mais_vendidos : string;

  constructor() {}

  servizoIdioma(idiomaCambiado : string) {

    this.idioma = idiomaCambiado;
    
    if(this.idioma == "gal") {
        this.brand = "XOIAS NURIA";
        this.placeholder = "Qué desexas buscar?";
        this.boton = "Buscar";
        this.mais_vendidos = "PRODUTOS MÁIS VENIDOS"; 
        this.ofertas = "PRODUTOS OFERTADOS"; 
        this.productos = [
          [produtos[0]], [produtos[1]], [produtos[2]], [produtos[3]], [produtos[4]],  [produtos[5]],   
          [produtos[6]], [produtos[7]], [produtos[8]], [produtos[9]], [produtos[10]], [produtos[11]]
        ];
    }
    if(this.idioma == "por") {
        this.brand = "JÓIAS NURIA";
        this.placeholder = "O que você quer procurar...";
        this.boton = "Procurar";
        this.mais_vendidos = "PRODUTOS MAIS VENDIDOS"; 
        this.ofertas = "PRODUTOS OFERECIDOS"; 
        this.productos = [
          [produtosPor[0]], [produtosPor[1]], [produtosPor[2]], [produtosPor[3]], [produtosPor[4]],  [produtosPor[5]],   
          [produtosPor[6]], [produtosPor[7]], [produtosPor[8]], [produtosPor[9]], [produtosPor[10]], [produtosPor[11]]
        ];
    }
  }

  obterListadoOfertas():Producto[][] {
      return [[produtos[10]], [produtos[1]], [produtos[2]], [produtos[3]], [produtos[9]]]; 
  }

}

export interface Producto {
  nome: string;
  prezo: number;
  imaxe: string;
  descricion: string;
}
