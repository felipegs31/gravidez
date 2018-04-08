import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Paciente } from '../../models/Paciente';
import { PacienteService } from "../../services/PacienteService";


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
}
