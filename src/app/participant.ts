import { Workshop } from './workshop';

export class Participant{

    public id:number;
    public name:string;
    public surname:string; 
    public organization:string; 
    public ico:number;
    public email:string;
    public start:Date;
    public end:Date;
    public early:boolean;
    public student:boolean;
    public singleRoom:boolean;
    public cash:boolean;

    private _workshop:Workshop;

    constructor() {
        this.id = null;
        this.name = "";
        this.surname = "";
        this.organization = "";
        this.ico = null;
        this.email = "";
        this.early = true;
        this.student = false;
        this.singleRoom = false;
        this.cash = false;
    }

    get workshop() {
        return this._workshop;
    }

    set workshop(w:Workshop) {
        this._workshop = w;
        this.start = w.start;
        this.start.setHours(16,0,0,0);
        this.end = w.end;
        this.end.setHours(16,0,0,0);
    }
}