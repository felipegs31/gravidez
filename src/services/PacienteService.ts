import { Injectable } from "@angular/core";
import { Paciente } from "../models/Paciente";

@Injectable()
export class PacienteService
{
    constructor(){}
    
    paciente : Paciente = new Paciente();
    setPacienteId(id : string)
    {
        this.paciente.id = id;
    }

    getPacienteId()
    {
        return this.paciente;
    }

    addEvento(evento : any)
    {
        this.paciente.events.push(evento);
    }

}