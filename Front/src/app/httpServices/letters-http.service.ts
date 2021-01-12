import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Letter} from '../Model/letter';

@Injectable({
  providedIn: 'root'
})
export class LettersHttpService {

  constructor(private http: HttpClient) {
  }

  private LETTERS_URL = 'http://localhost:8080/letters';

  public getLetters(): Observable<Letter[]> {
    return this.http.get<Letter[]>(this.LETTERS_URL);
  }


}
