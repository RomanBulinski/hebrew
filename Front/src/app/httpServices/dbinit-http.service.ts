import { Injectable } from '@angular/core';
import {Word} from '../Model/word';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DBInitHttpService {

  constructor(private http: HttpClient) { }

  public dataBaseInit(): Observable<any> {
    return this.http.get<Word>( 'http://localhost:8080/dataBase' );
  }

}
