import { Component } from '@angular/core';
import { NavController, AlertController, ToastController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { PacienteService } from '../../services/PacienteService';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  testCheckboxOpen = false;
  testCheckboxResult: any;

  constructor(public navCtrl: NavController, public navParams : NavParams, public alertCtrl : AlertController, public toastCtrl : ToastController,
        public db : DatabaseProvider, public pacienteService : PacienteService) 
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
      buttons: ['Gostei']
    });

    alert.present();
  }

  doCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which planets have you visited?');

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
