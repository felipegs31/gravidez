import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { VacineModalPage } from "../vacine-modal/vacine-modal";

/**
 * Generated class for the VacinasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vacinas',
  templateUrl: 'vacinas.html',
})
export class VacinasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VacinasPage');
  }

  onClickInfo()
  {
    let modal = this.modalCtrl.create(VacineModalPage);
    modal.present();
  }

}
