import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Word} from '../Model/word';
import {HttpService} from './http.service';

@Injectable({
  providedIn: 'root'
})
export class WordsHttpService extends HttpService{

  constructor(private http: HttpClient) {
    super();
  }

  public getAll(): Observable<Word[]> {
    return this.http.get<Word[]>( 'http://localhost:8080/words' );
  }

  public save(word: Word): Observable<any> {
    console.log("1111111111111");
    return this.http.post<Word>( 'http://localhost:8080/words', word );
  }
}

