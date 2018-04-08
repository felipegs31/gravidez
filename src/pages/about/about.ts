import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import {CreateEventPage} from '../create-event/create-event';

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

  constructor(public navCtrl: NavController,
            private modalCtrl: ModalController) {
              this.events = [{
                name: "Ultrasonografia BHCG",
                description: "importante para o bebe",
                year: 2018,
                month: 3,
                date: 10,
                long: "long",
                lat: "lat"
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
                name: "Ultrasonografia BHCG",
                description: "importante para o bebe",
                year: 2018,
                month: 3,
                date: 11,
                long: "long",
                lat: "lat"
              },
              {
                name: "Ultrasonografia BHCG",
                description: "importante para o bebe",
                year: 2018,
                month: 3,
                date: 25,
                long: "long",
                lat: "lat"
              }]
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

  onDaySelect(event) {
    console.log(event);
    this.selectedDateCalendar = {
      year: event.year,
      month: event.month,
      date: event.date
    }
    this.displayDayEvents(this.events);
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
