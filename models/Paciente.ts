import { Evento } from "./Evento";
import { Vacina } from "./Vacina";

export class Paciente
{
    constructor(public id : string, email : string, birthday: Date, gestacao: Date, events: Array<Evento>, vacinas: Array<Vacina>){}
}