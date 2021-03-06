import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Letter} from '../Model/letter';
import {HttpService} from "./http.service";



@Injectable({
  providedIn: 'root'
})
export class LettersHttpService extends HttpService{

  constructor(private http: HttpClient) {
    super();
  }

  private LETTERS_URL = 'http://localhost:8080/letters';
  public getAll(): Observable<Letter[]> {
    return this.http.get<Letter[]>(this.LETTERS_URL);
  }


}
