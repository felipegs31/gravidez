import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController,ModalController } from 'ionic-angular';
import { MapPage } from '../map/map';

@IonicPage()
@Component({
  selector: 'page-create-event',
  templateUrl: 'create-event.html',
})
export class CreateEventPage {

  textData;
  months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  selectedDate = {year: 0, date: 0, month: 0}
  tipoEventos = [
    'Vacina',
    'Ultrassonografia',
    'Ecocardiograma'    
    ]
  tipoEv = "";
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private viewCtrl: ViewController,
              private modalCtrl: ModalController) {
    this.selectedDate.year = this.navParams.get('year');
    this.selectedDate.month = this.navParams.get('month');
    this.selectedDate.date = this.navParams.get('date');
    this.dateToText();
    
  }

  dateToText() {
    this.textData = `${this.selectedDate.date} de ${this.months[this.selectedDate.month]} de ${this.selectedDate.year} `
  }

  onLeave() {
    this.viewCtrl.dismiss();
  }

  onSave() {
    console.log(this.selectedDate);
  }

  goToMaps() {
    const modal = this.modalCtrl.create(MapPage, {tipoEv: this.tipoEv} );
      modal.present();
      modal.onDidDismiss(
        () => {
        }
      );
  }

  disableButtonMap() {
    if(this.tipoEv != "") {
      return false;
    } else {
      return true;
    }
  }

}
