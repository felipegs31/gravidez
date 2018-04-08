import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import {CreateEventPage} from '../create-event/create-event';
import * as moment from 'moment';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {

  controllVariable = 0;
  events = [];
  selectedDateCalendar = {year: 0,month: 0, date:0};
  filteredEvents = [];
  currentEvents = [];
  filteredEventsSemana = [];
  eventsSemana = [];
  dataGestacao = {
    name: "Concepção",
    description: "Descubriu que está grávida",
    year: 2018,
    month: 1,
    date: 19,
  }
  weekDifference = 0;
  constructor(public navCtrl: NavController,
            private modalCtrl: ModalController) {
              this.events = [
              {
                name: "Concepção",
                description: "Descubriu que está grávida",
                year: 2018,
                month: 1,
                date: 19,
              },
              {
                name: "Ultrasonografia BHCG",
                description: "importante para o bebe",
                year: 2018,
                month: 3,
                date: 10,
                long: "long",
                lat: "lat"
              },
              {
                name: "Exame de Sangue",
                description: "importante para o bebe",
                year: 2018,
                month: 3,
                date: 10,
                long: "long",
                lat: "lat"
              },
              {
                name: "Ultrasonografia morfológico",
                description: "importante para o bebe",
                year: 2018,
                month: 3,
                date: 11,
                long: "long",
                lat: "lat"
              },
              {
                name: "Ultrasom 3D",
                description: "importante para o bebe",
                year: 2018,
                month: 3,
                date: 25,
                long: "long",
                lat: "lat"
              }];

              this.eventsSemana = [
                {
                  semana: 1,
                  name: 'Tipagem de sangue',
                  description: 'É um exame feito para investigar se a gestante é Rh negativo'
                },
                {
                  semana: 4,
                  name: 'Cultura de urina',
                  description: 'Diagnostica infecção urinária e diabetes.'
                },
                {
                  semana: 4,
                  name: 'Protoparasitológico de fezes',
                  description: 'Pesquisa a presença de verminoses que possam roubar os nutrientes do feto.'
                },
                {
                  semana: 6,
                  name: 'Ultra-som',
                  description: 'Avalia a correta localização da gestação'
                },
                {
                  semana: 7,
                  name: 'Protoparasitológico',
                  description: 'Pesquisa a presença de verminoses'
                },
                {
                  semana: 7,
                  name: 'Ultra-som',
                  description: 'Avalia a correta localização da gestação'
                },
                {
                  semana: 8,
                  name: 'Exame de Sangue',
                  description: 'doenças genéticas como a Síndrome de Down'
                },
              ]

              this.setCurrentEvents(this.events);
   }

  ngOnInit(){
    this.displayDayEvents(this.events);
  }

  displayDayEvents(events) {
    this.filteredEvents = [];
    console.log(this.selectedDateCalendar)
    for(let i=0; i<events.length; i++) {
      if(events[i].year === this.selectedDateCalendar.year && events[i].month === this.selectedDateCalendar.month && events[i].date === this.selectedDateCalendar.date) {
        this.filteredEvents.push(events[i]);
      }
    }

    console.log(this.filteredEvents);
  }

  countWeek( dataGestacao, selectedDateCalendar) {
    let gestacao = moment([dataGestacao.year, dataGestacao.month, dataGestacao.date])
    let target = moment([selectedDateCalendar.year, selectedDateCalendar.month, selectedDateCalendar.date]);
    this.weekDifference = gestacao.diff(target, 'week');
    this.weekDifference = -this.weekDifference;
    console.log(this.weekDifference);
  }

  setWeekCurrentEvents(eventsSemana) {
    this.filteredEventsSemana = [];
    for(let i=0; i<eventsSemana.length; i++) {
      if(eventsSemana[i].semana === this.weekDifference ) {
        this.filteredEventsSemana.push(eventsSemana[i]);
      }
    }
  }

  onDaySelect(event) {
    console.log(event);
    this.selectedDateCalendar = {
      year: event.year,
      month: event.month,
      date: event.date
    }
    this.displayDayEvents(this.events);
    this.countWeek(this.dataGestacao, this.selectedDateCalendar);
    this.setWeekCurrentEvents(this.eventsSemana);
  }

  addEvent(){
    const modal = this.modalCtrl.create(CreateEventPage, { year: this.selectedDateCalendar.year,
    date: this.selectedDateCalendar.date, month: this.selectedDateCalendar.month});
    modal.present();
    modal.onDidDismiss(
      () => {
      }
    );
  }

  setCurrentEvents(events){
    console.log(events);
    this.currentEvents = [];
    for(let i=0; i<events.length; i++) {
      this.currentEvents.push({
        date: events[i].date,
        month: events[i].month,
        year: events[i].year
      })
    }
    console.log(this.currentEvents);
  }


  onMonthSelect(event) {
    console.log(event)
  }
}
