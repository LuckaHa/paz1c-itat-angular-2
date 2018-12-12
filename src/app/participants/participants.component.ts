import { Component, OnInit } from '@angular/core';
import { Participant } from '../participant';
import { RestClientService } from '../rest-client.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  private lucka:Participant = new Participant();
  private jakub:Participant = new Participant();
  private participants : Participant[] = [
    this.lucka,
    this.jakub
  ];

  private selected:Participant;

  constructor(private restService:RestClientService) { }

  ngOnInit() {
    this.restService.getParticipants()
    .subscribe(participantsGot => this.participants = participantsGot);
  }

  selectParticipant(p:Participant):void{
    this.selected = p;
  }

}
