import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserContainer } from './modal/user-contain';

@Injectable({
  providedIn: 'root'
})
export class UserinformationService {

  constructor(private http: HttpClient) { }

  /* Method to make http call to fetch user details from API */

  onClickData(): Observable<UserContainer> {

    return this.http.get<UserContainer>("./assets/userinformation.json")
  }

}
