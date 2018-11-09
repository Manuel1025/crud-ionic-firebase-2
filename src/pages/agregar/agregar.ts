import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosService }from "../../services/productos.services";


/**
 * Generated class for the AgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agregar',
  templateUrl: 'agregar.html',
})
export class AgregarPage {

  producto: any = {ref:null, nombrep:null, precio:null, descripcion:null}
  ref=null;
  show=true;
  constructor(public navCtrl: NavController, public navParams: NavParams, public produc: ProductosService) {
  this.ref = navParams.get('ref');
  if(this.ref != 0){
  this.produc.getProducto(this.ref).subscribe(producto=>{this.producto=producto;});}
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgregarPage');
  }

AddA(){
    if(this.ref != 0){this.produc.EditarProducto(this.producto);
    alert('producto editado con exito');}
    else{ this.produc.AddA(this.producto);
      alert('producto registrado con exito');}
       this.navCtrl.pop();
}

EliminarProducto(){
  this.show=false;
  this.produc.EliminarProducto(this.producto);
  alert('producto eliminado con exito');
  this.navCtrl.pop();

}

}
