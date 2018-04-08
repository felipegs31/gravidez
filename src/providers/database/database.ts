import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Paciente } from '../../models/Paciente';
import { PacienteService } from "../../services/PacienteService";
import { forEach } from '@firebase/util';


@Injectable()
export class DatabaseProvider {

  constructor(public db : AngularFireDatabase, public paciente : PacienteService) 
  {
    console.log('Hello DatabaseProvider Provider');

  }

  createUserRelation(userId: string)
  { 
    
    this.db.object(`pacientes/${userId}`).set(userId);
    return this.paciente.setPacienteId(userId);
  }

  sendFeelingsToDB(pacienteId : string, data: string | Array<string>)
  {
    this.db.object(`${pacienteId}/feelings`).set(data);
  }

  addEventToPaciente(pacienteId, evento)
  {
    this.db.object(`pacientes/${pacienteId}/name`).set(evento);
    return this.paciente.addEvento(evento);

  }

  addEvents(eventos)
  {
    for(let evento of eventos)
    {
      this.db.object(`eventos/${evento.name}`).set(evento);
    }
  }

  addEventsToPaciente(id, eventos)
  {
    for(let evento of eventos)
    {
      this.db.object(`${id}/eventos/${evento.name}`).set(evento);
    }
  }

  getEventos()
  {
    return this.db.object("eventos").valueChanges();
  }

  getEventosPaciente(id)
  {
    return this.db.object(`${id}/eventos`).valueChanges();
  }

}
