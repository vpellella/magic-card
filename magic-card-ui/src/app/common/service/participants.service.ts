import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { of } from 'rxjs';
import { Participant } from 'src/app/participants/model/participant';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {

  constructor(private httpclient: HttpClient) { }

  getAllParticipants()
  {
    return this.httpclient.get<any[]>('/api/participants');
  //  return of([
  //     {'participantId': 1, 'name': 'vineel', 'mailId': 'adyu@js.co', 'contact': 7176363},
  //     {'participantId': 1, 'name': 'vineel', 'mailId': 'adyu@js.co', 'contact': 7176363},
  //     {'participantId': 1, 'name': 'vineel', 'mailId': 'adyu@js.co', 'contact': 7176363},
  //     {'participantId': 1, 'name': 'vineel', 'mailId': 'adyu@js.co', 'contact': 7176363},
  //     {'participantId': 1, 'name': 'vineel', 'mailId': 'adyu@js.co', 'contact': 7176363},
  //     {'participantId': 1, 'name': 'vineel', 'mailId': 'adyu@js.co', 'contact': 7176363},
  //     {'participantId': 1, 'name': 'vineel', 'mailId': 'adyu@js.co', 'contact': 7176363},
  //     {'participantId': 1, 'name': 'vineel', 'mailId': 'adyu@js.co', 'contact': 7176363},
  //     {'participantId': 1, 'name': 'vineel', 'mailId': 'adyu@js.co', 'contact': 7176363},
  //     {'participantId': 1, 'name': 'vineel', 'mailId': 'adyu@js.co', 'contact': 7176363},
  //     {'participantId': 1, 'name': 'vineel', 'mailId': 'adyu@js.co', 'contact': 7176363},
  //     {'participantId': 1, 'name': 'vineel', 'mailId': 'adyu@js.co', 'contact': 7176363},
  //     {'participantId': 1, 'name': 'vineel', 'mailId': 'adyu@js.co', 'contact': 7176363},
  //     {'participantId': 1, 'name': 'vineel', 'mailId': 'adyu@js.co', 'contact': 7176363}
  // 
  // ])
  }


  register(participant: Participant){
    return this.httpclient.post("/api/participants/register", participant);
  }
}
