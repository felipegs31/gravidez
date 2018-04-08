import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage implements OnInit {

  lat: number = -22.999047;
  long: number = -43.365804;
  zoom: number = 16;
  infoWindow;
  typePlaces = [];
  selectedPlace = {name:'', preco: 0, avaliacao: 0, planoSaude:'', lat:0, long: 0}
  places = [{
    type: 'Ultrassonografia',
    name:'Clínica Médica Popular RJ',
    lat: -22.967801,
    long: -43.183733,
    preco: 300,
    planoSaude: 'Unimed',
    avaliacao: 3
  },{
    type: 'Ultrassonografia',
    name:'Ultra Rad 93',
    lat: -22.967564,
    long: -43.185922,
    preco: 200,
    planoSaude: 'Unimed',
    avaliacao: 4
  },
  {
    type: 'Ultrassonografia',
    name:'Ultra Sonografia Dr Joao Carlos',
    lat: -22.971524,
    long: -43.186823,
    preco: 150,
    planoSaude: 'Unimed',
    avaliacao: 3
  },
  {
    type: 'Ultrassonografia',
    name:'Ultra-Sonografia da Barra',
    lat: -23.000569,
    long: -43.347806,
    preco: 150,
    planoSaude: 'Unimed',
    avaliacao: 3
  },
  {
    type: 'Vacina',
    name:'Prophylaxis Clínica de Vacinação',
    lat: -23.001061,
    long: -43.318106,
    preco: 150,
    planoSaude: 'Unimed',
    avaliacao: 3
  },
  { 
    type: 'Vacina',
    name:'Vaccini - Clínica de Vacinação',
    lat: -23.004300,
    long: -43.314157,
    preco: 150,
    planoSaude: 'Unimed',
    avaliacao: 3
  },
  { 
    type: 'Vacina',
    name:'Prevcenter Clínica de Vacinação Barra Garden',
    lat: -22.998928,
    long: -43.342396,
    preco: 150,
    planoSaude: 'Unimed',
    avaliacao: 3
  }
  ];
  type:string;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private viewCtrl: ViewController) {
                this.type = this.navParams.get('tipoEv');
              }
  
  ngOnInit(){
    this.locateMe();
    this.filterPlaces();
  }


  clickedMarker(place, index) {
    this.infoWindow = place;
    this.selectedPlace = {
      name: place.name, 
      preco: place.preco, 
      avaliacao: place.avaliacao, 
      planoSaude:place.planoSaude,
      lat: place.lat,
      long: place.long
    }
  }

  filterPlaces(){
    this.typePlaces = [];
    for(let i=0; i<this.places.length; i++) {
      if(this.places[i].type === this.type) {
        this.typePlaces.push(this.places[i]);
      }
    }
    console.log(this.typePlaces);
  }

  locateMe() {
    // this.geolocation.getCurrentPosition().then((resp) => {
    //   this.lat = resp.coords.latitude
    //   this.long = resp.coords.longitude
    // }).catch((error) => {
    //   console.log('Error getting location', error);
    // });
  }

  onLeave() {
    this.viewCtrl.dismiss();
  }

  onSave() {
    this.viewCtrl.dismiss({lat: this.selectedPlace.lat, long: this.selectedPlace.long});
  }

}
