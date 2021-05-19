import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Summary } from '../shared/models/Summary';



@Injectable({
  providedIn: 'root'
})
export class SummaryService {

  baseUrl : string = "https://localhost:44343"

  constructor(private httpClient : HttpClient) { }

  getSummary() : Observable<Summary[]>{
    return this.httpClient.get<Summary[]>(`${this.baseUrl}/summary`);
  }

}
