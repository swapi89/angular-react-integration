import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ParticipantService {

  private loginUrl = 'http://localhost:7007/login';  // URL to web api

  constructor(private http: Http) { }


  getParticipant(participantObj :  any): Promise<any> {
  //  let headers = new Headers({ 'Content-Type': 'text/plain' });
  //  let options = new RequestOptions({ headers: headers });


    return this.http.post(this.loginUrl,participantObj)
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
