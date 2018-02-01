import { Component } from '@angular/core';
import {ProductosService} from '../services/productos.service';

@Component({
    selector: 'app-producto',
    templateUrl: './producto.component.html'
})
export class ProductoComponent {
    productos= null;
    constructor(private productosService: ProductosService){
      this.productos=productosService.getProducto();

    }
}
