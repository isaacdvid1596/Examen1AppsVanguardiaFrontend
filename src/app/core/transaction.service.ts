import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../shared/models/Transaction';



@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  baseUrl : string = "https://localhost:44343"

  constructor(private httpClient : HttpClient) { }

  getTransaction() : Observable<Transaction[]>{
    return this.httpClient.get<Transaction[]>(`${this.baseUrl}/transactions`);
  }

}
