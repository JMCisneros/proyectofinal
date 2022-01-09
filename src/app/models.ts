export interface Producto{
    id: number;
    nombre: string;
    precioP: number;
    cantidadP: number;
}

export interface Pedido{
    id: number;
    productos: ProductoPedido[];
    precioTotal: number;
}

interface ProductoPedido{
    producto: Producto;
    cantidad:number;
}

export type EstadoPedido = 'enviado';