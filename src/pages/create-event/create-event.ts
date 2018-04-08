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
    'Atividades'    
    ]
  tipoEv = "";
  atividadesRecomendadas = [
    {
      name: 'Yoga',
      description: 'Melhora o desempenho sexual e a qualidade do sono.'
    },
    {
      name: 'Natação',
      description: 'Melhora a postura: aumenta a flexibilidade'
    },
    {
      name: 'Pilates',
      description: 'Aumento da Resistência Física e Mental.'
    },
    {
      name: 'Meditação',
      description: 'Diminui a ansiedade, melhora a depressão'
    }
  ]
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

  procurarAtividade(ativ) {
    console.log(ativ);
    const modal = this.modalCtrl.create(MapPage, {tipoEv: ativ.name} );
      modal.present();
      modal.onDidDismiss(
        () => {
        }
    );
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
