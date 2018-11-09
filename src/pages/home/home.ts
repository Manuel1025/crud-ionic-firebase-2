import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosService }from "../../services/productos.services";
import { AgregarPage } from '../agregar/agregar';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  productos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ProductosServ : ProductosService) {
    this.ProductosServ.getproductos().subscribe(productos=>{this.productos=productos});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
 public Detalles(ref){
    this.navCtrl.push(AgregarPage, {ref:ref});
  }

 public Add(){
    this.navCtrl.push(AgregarPage, {ref:0});
  }


}
