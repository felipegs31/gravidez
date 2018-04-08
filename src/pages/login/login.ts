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

    //this.db.createUserRelation("01");
    this.db.getEventosPaciente("01").subscribe(res => console.log(res));

    // this.db.addEventsToPaciente("02",
    // [
    //   {
    //     name: "Concepção",
    //     description: "Descubriu que está grávida",
    //     year: 2018,
    //     month: 1,
    //     date: 19,
    //   },
    //   {
    //     name: "Ultrasonografia BHCG",
    //     description: "importante para o bebe",
    //     year: 2018,
    //     month: 3,
    //     date: 10,
    //     long: "long",
    //     lat: "lat"
    //   },
    //   {
    //     name: "Exame de Sangue",
    //     description: "importante para o bebe",
    //     year: 2018,
    //     month: 3,
    //     date: 10,
    //     long: "long",
    //     lat: "lat"
    //   },
    //   {
    //     name: "Ultrasonografia morfológico",
    //     description: "importante para o bebe",
    //     year: 2018,
    //     month: 3,
    //     date: 11,
    //     long: "long",
    //     lat: "lat"
    //   },
    //   {
    //     name: "Ultrasom 3D",
    //     description: "importante para o bebe",
    //     year: 2018,
    //     month: 3,
    //     date: 25,
    //     long: "long",
    //     lat: "lat"
    //   }]);
    
    // this.db.addEvents(
    //   [
    //     {
    //       semana: 1,
    //       name: 'Tipagem de sangue',
    //       description: 'É um exame feito para investigar se a gestante é Rh negativo'
    //     },
    //     {
    //       semana: 4,
    //       name: 'Cultura de urina',
    //       description: 'Diagnostica infecção urinária e diabetes.'
    //     },
    //     {
    //       semana: 4,
    //       name: 'Protoparasitológico de fezes',
    //       description: 'Pesquisa a presença de verminoses que possam roubar os nutrientes do feto.'
    //     },
    //     {
    //       semana: 6,
    //       name: 'Ultra-som',
    //       description: 'Avalia a correta localização da gestação'
    //     },
    //     {
    //       semana: 8,
    //       name: 'Exame de Sangue',
    //       description: 'doenças genéticas como a Síndrome de Down'
    //     },
    //   ]
    // );
    this.navCtrl.push(TabsPage);
    // this.fireAuth.auth.signInAndRetrieveDataWithEmailAndPassword(this.email, this.password)
    // .then(
    //   (data) =>
    //   {
    //     console.log(data);
    //   });

  }
}
