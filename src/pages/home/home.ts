import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, NavParams, ModalController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { PacienteService } from '../../services/PacienteService';
import { MapPage } from '../map/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  testCheckboxOpen = false;
  testCheckboxResult: any;

  constructor(public navCtrl: NavController, public navParams : NavParams, public alertCtrl : AlertController, public toastCtrl : ToastController,
        public db : DatabaseProvider, public pacienteService : PacienteService, private modalCtrl: ModalController) 
  {
    console.log(this.pacienteService.getPacienteId());  
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Que Ótimo! Obrigada pela seu feedback.',
      duration: 3000,
      position: 'top'
    });
    
    this.sendFeelingsToDB("Bem");

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }


  doAlert() {
    let alert = this.alertCtrl.create({
      title: 'Já pensou em Yoga ?',
      subTitle: 'O yoga pode auxiliar a ter um parto saudável e seguro, dentre outras vantagens.',
      buttons: [{text:'Gostei', handler:() => {
        const modal = this.modalCtrl.create(MapPage, {tipoEv: 'Yoga'} );
          modal.present();
          modal.onDidDismiss(
            () => {
        }
      );
      }}]
    });

    alert.present();
  }

  doCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Como você está se sentindo?');

    alert.addInput({
        type: 'checkbox',
        label: 'Me sentindo cansada',
        value: 'Cansada',
        checked: true
    });

    alert.addInput({
        type: 'checkbox',
        label: 'Muito Inchada',
        value: 'Inchada'
    });

    alert.addInput({
        type: 'checkbox',
        label: 'Com febre',
        value: 'Febre'
    });

    alert.addInput({
        type: 'checkbox',
        label: 'Estou Ansiosa',
        value: 'Ansionsa'
    });

    alert.addInput({
        type: 'checkbox',
        label: 'Brigas em casa',
        value: 'Brigas'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: (data: any) => {
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
        this.sendFeelingsToDB(data);
        this.doAlert();
      }
    });
    
    alert.present();
  }
  
  
  sendFeelingsToDB(data : string | Array<string>)
  {
    console.log('Checkbox data:', data);
  }

}
