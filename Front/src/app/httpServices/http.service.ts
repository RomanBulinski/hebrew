import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class HttpService {

  abstract getAll(): Observable<any[]>;
  abstract save( object: any ): Observable<any>;
}

