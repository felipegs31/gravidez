import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';
import {
  TabsPage
} from '../tabs/tabs'
import {
  ToastController
} from 'ionic-angular';
import {
  AngularFireAuth
} from 'angularfire2/auth';
import {
  AngularFireDatabase
} from "angularfire2/database";
import { Evento } from "../../models/Evento";
import { DatabaseProvider } from '../../providers/database/database';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: any;
  password: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toastCtrl: ToastController, private fireAuth: AngularFireAuth,
    private db: DatabaseProvider) {}


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Usuário inválido.',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  signIn() {

    this.db.createUserRelation("01");
    this.navCtrl.push(TabsPage);
    // this.fireAuth.auth.signInAndRetrieveDataWithEmailAndPassword(this.email, this.password)
    // .then(
    //   (data) =>
    //   {
    //     console.log(data);
    //   });

  }
}
