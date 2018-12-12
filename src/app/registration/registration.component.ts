import { Component, OnInit } from '@angular/core';
import { Participant } from '../participant';
import { Workshop } from '../workshop';
import { RestClientService } from '../rest-client.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  private participant: Participant = new Participant();
  private workshops: Workshop[] = [
    new Workshop(1, "1.workshop", new Date('2019-09-17'), new Date('2019-09-19'), 250, 200, 280, 260),
    new Workshop(2, "2.workshop", new Date('2019-09-18'), new Date('2019-09-20'), 250, 200, 280, 260)
  ];
  private saved:boolean = false;

  constructor(private restService:RestClientService) { }

  ngOnInit() {
    this.getWorkshops;   
  }

  // vrati model participanta
  get model():string {
    return JSON.stringify(this.participant);
  }

  getWorkshops():Workshop[] {
    this.restService.getWorkshops().subscribe(workshopsGot => { 
      this.workshops = workshopsGot;
      this.participant.workshop = this.workshops[0]; // defaultne vybrany prvy
    });
    return this.workshops;
  }

  formSubmit() {
    this.restService.sendNewParticipant(this.participant).subscribe(participantSent => {
      this.saved = true;
      setTimeout(_=> this.saved = false, 5000); // o 5 sekund uz nie je saved
    })
  }
}
