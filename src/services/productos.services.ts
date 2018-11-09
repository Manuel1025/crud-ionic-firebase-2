import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';




@Injectable()
export class ProductosService{
producto = [];  
constructor(public sgbd: AngularFireDatabase){}

public getproductos(){
  return this.sgbd.list('productos/').valueChanges();
  }

public getProducto(ref) {
  return this.sgbd.object('productos/'+ref).valueChanges();
}

public AddA(producto){
  this.sgbd.database.ref('productos/'+producto.ref).set(producto);
}

public EditarProducto(producto){
  this.sgbd.database.ref('productos/'+producto.ref).set(producto);
  //for(let i=0; i < this.productos.length; i++){
    //if(this.productos[i].ref == producto.ref){
    //this.productos[i] = producto;   
    // }
  //}
}

public EliminarProducto(producto){
  this.sgbd.database.ref('productos/'+producto.ref).remove();
  //for(let i=0; i < this.productos.length; i++){
    //if(this.productos[i].ref == producto.ref){
      //this.productos.splice(i, 1);   
    // }
  //}
}
}


