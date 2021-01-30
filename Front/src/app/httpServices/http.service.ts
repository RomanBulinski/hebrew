import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Word} from "../Model/word";

@Injectable({
  providedIn: 'root'
})
export abstract class HttpService {

  abstract getAll(): Observable<any[]>;

}

