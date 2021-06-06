import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';
import {Letter} from '../Model/letter';
import {HttpService} from './http.service';


@Injectable({
  providedIn: 'root'
})
export class LettersHttpService extends HttpService {

  constructor(private http: HttpClient) {
    super();
  }

  public getAll(): Observable<Letter[]> {
    return this.http.get<Letter[]>('http://localhost:8080/letters');
  }

  public save(letter: Letter): Observable<Letter> {
    return  EMPTY;
  }
}
