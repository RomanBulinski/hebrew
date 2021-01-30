import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Word} from '../Model/word';
import {HttpService} from "./http.service";


@Injectable({
  providedIn: 'root'
})
export class WordsHttpService extends HttpService{

  constructor(private http: HttpClient) {
    super();
  }

  private WORDS_URL = 'http://localhost:8080/words';

  public getAll(): Observable<Word[]> {
    return this.http.get<Word[]>(this.WORDS_URL);
  }


}
