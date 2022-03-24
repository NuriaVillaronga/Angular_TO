import { Component, Output, EventEmitter} from '@angular/core';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TarefaFinal';

  idioma : any;
  titulo_mais_vendidos : string;
  titulo_ofertas : string;

  constructor(public servizoProductos : ProductosService) {}

  ngOnInit(): void {
      this.idioma = localStorage.getItem('lang');
      this.servizoProductos.servizoIdioma(this.idioma);
      this.titulo_mais_vendidos = this.servizoProductos.mais_vendidos;
      this.titulo_ofertas = this.servizoProductos.ofertas;
  }
}
