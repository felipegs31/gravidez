import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the CreateEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-event',
  templateUrl: 'create-event.html',
})
export class CreateEventPage {

  textData;
  months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  selectedDate = {year: 0, date: 0, month: 0}
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController) {
    this.selectedDate.year = this.navParams.get('year');
    this.selectedDate.month = this.navParams.get('month');
    this.selectedDate.date = this.navParams.get('date');
    this.dateToText();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateEventPage');
  }

  dateToText() {
    this.textData = `${this.selectedDate.date} de ${this.months[this.selectedDate.month]} de ${this.selectedDate.year} `
  }

  onLeave() {
    this.viewCtrl.dismiss();
  }

  onSave() {
    console.log();
  }

  goToMaps() {

  }

}
