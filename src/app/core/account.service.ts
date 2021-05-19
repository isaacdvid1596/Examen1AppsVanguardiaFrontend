import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../shared/models/Account';



@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl : string = "https://localhost:44343"

  constructor(private httpClient : HttpClient) { }

  getAccounts() : Observable<Account[]>{
    return this.httpClient.get<Account[]>(`${this.baseUrl}/accounts`);
  }

}
