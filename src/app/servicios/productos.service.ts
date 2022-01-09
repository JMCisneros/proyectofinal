import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id:number;
  nombre:string;
  precio:number;
  cantidad:number;
}


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  data:Product[] = [
    {id:1,nombre:'Billetera', precio:15,cantidad:10},
    {id:2,nombre:'Bolsa Frida Kahlo', precio:10,cantidad:10},
    {id:3,nombre:'Cartera de Mariposas', precio:8,cantidad:10},
    {id:4,nombre:'Base Líquida', precio:3,cantidad:10},
    {id:5,nombre:'Cadena de Acero Inoxidable', precio:10,cantidad:10},
    {id:6,nombre:'Paleta de Sombras', precio:6,cantidad:10},
    {id:7,nombre:'Brillo Labial', precio:3,cantidad:10},
  ]
  
  

private carrito= [];
private contadorItems= new BehaviorSubject(0);

  constructor() { }

  obtenerProductos(){
    return this.data;
  }
  
}
