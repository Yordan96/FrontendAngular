import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductosService{
    productos = 'productoadfasdf';
    constructor(private http:Http) {}


    public getProducto(){
        //console.log( return this.http.get('http://127.0.0.1:8000/api/v1/productos/?format=json'));
        return this.http.get('http://127.0.0.1:8000/api/v1/productos/?format=json');
    }


}