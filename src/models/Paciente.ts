import { Evento } from "./Evento";
import { Vacina } from "./Vacina";
import { Feeling } from "./Feeling";

export class Paciente
{
    constructor(public id : string = null, public name :string = null, public email : string = null, 
        public birthday: Date = null, public gestacao: Date = null, 
        public events: Array<Evento> = null, public vacinas: Array<Vacina> = null,
        public feelings : Array<Feeling> = null){}
    
}