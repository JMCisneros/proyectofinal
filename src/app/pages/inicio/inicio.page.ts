import { Component } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage{

  carrito=[];
  products=[];
  contadorItems: BehaviorSubject<number>;

  resultado: any;
  constructor(private producto:ProductosService) { }

  ngOnInit() {
    this.products=this.producto.obtenerProductos();
  }
  

  abrirCarrito(){
    console.log("Abrir el carrito")
  }

}
