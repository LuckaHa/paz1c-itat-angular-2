import { Injectable } from '@angular/core';
import { Participant } from './participant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workshop } from './workshop';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {

  private urlP = 'http://localhost:8080/participants';
  private urlW = 'http://localhost:8080/workshops';

  constructor(private http:HttpClient) { }

  public getParticipants():Observable<Participant[]> {
    return this.http.get<Participant[]>(this.urlP);
  }

  public getWorkshops():Observable<Workshop[]> {
    return this.http.get<Workshop[]>(this.urlW);
  }

  public sendNewParticipant(participant:Participant):Observable<Participant> {
    return this.http.post<Participant>(this.urlP, participant);
  }
}
