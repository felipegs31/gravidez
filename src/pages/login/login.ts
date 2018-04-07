import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'
import { ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from "angularfire2/database";


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

  email:any;
  password:any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private toastCtrl: ToastController, private fireAuth : AngularFireAuth,
    private db : AngularFireDatabase) 
  {
  }
  
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
  
  signIn()
  {
    //this.navCtrl.push(TabsPage);
    this.fireAuth.auth.signInAndRetrieveDataWithEmailAndPassword(this.email, this.password)
    .then(
      (data) =>
      {
        console.log(data);
        this.navCtrl.push(TabsPage);
      });
    }
    
    testDB()
    {
      const usersRef = this.db.object('events/event1');
      usersRef.update(
        {year:2011})
        .then(data => console.log(data));
    }
    
  }