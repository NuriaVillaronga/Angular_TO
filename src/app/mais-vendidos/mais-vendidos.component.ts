import { Component, OnInit, Input} from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-mais-vendidos', 
  templateUrl: './mais-vendidos.component.html', 
  styleUrls: ['./mais-vendidos.component.css']
})

export class MaisVendidosComponent implements OnInit {

  @Input() idiomaNai : string;
  idioma : string;
  productos: Producto[][];
  servizo : ProductosService;

  constructor(servizoProductos :ProductosService) {
      this.servizo = servizoProductos;
  }

  ngOnInit(): void {
      this.idioma = this.idiomaNai;
      this.servizo.obterProductos(this.idioma);
      this.productos = this.servizo.productos;
  }

  mostrarProducto(produto : Producto) {
    var nome = produto.nome.toUpperCase();
    var prezo = produto.prezo;
    var imaxe = produto.imaxe;
    var descricion = produto.descricion;
    var myWindow = window.open();
    myWindow?.document.write("<html><head><title>"+nome+"</title><style>.global_row {text-align: center;}.image_row {padding-top: 40px;}.description_row {padding-top: 30px;padding-bottom: 40px;}.titulo {font-family: 'Inconsolata', monospace;font-weight: bold;font-size: 20px;}.precio {font-family: 'Inconsolata', monospace;font-weight: bold;color:rgb(126, 0, 0)}.descricion {margin-top: 15px;font-family: 'Inconsolata', monospace;}.description_row div {padding-top: 0px !important;padding-bottom: 0px !important;}.container_produto{border:1px solid grey;}</style><body><center><div class='container'><div class='row global_row'><div class='col-1'></div><div class='col-10 container_produto'><div class='row image_row'><div class='col-3'></div><div class='col-6'><img  src='./assets/imaxes/"+imaxe+"'></div><div class='col-3'></div></div><div class='row description_row'><div class='col-2'></div><div class='col-8'><div class='precio'><p><br>"+prezo+"€</p></div><div class='titulo'>"+nome+"</div><div class='descricion'>"+descricion+"</div></div><div class='col-2'></div></div></div><div class='col-1'></div></div></div></center></body></html>");
  }
}

export interface Producto {
    nome: string;
    prezo: number;
    imaxe: string;
    descricion: string;
}
