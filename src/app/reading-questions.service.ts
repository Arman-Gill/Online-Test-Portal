import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Questions } from './questions/questionInterface';

@Injectable({
  providedIn: 'root'
})
export class ReadingQuestionsService {

  private _url:string = "./assets/questions.json"

  constructor(private http: HttpClient) { }

  fetchQuestions() {
    return this.http.get<any>(this._url);
  }
}
