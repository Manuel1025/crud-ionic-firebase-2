import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../modelos/user";
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  async Registro(user: User){
    try{
    const result = this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
    console.log(result);
  }
  catch(e){
     console.error(e);
  }
  this.navCtrl.pop();
}

}
