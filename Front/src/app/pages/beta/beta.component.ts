import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {map, switchMap, tap} from "rxjs/operators";

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {

  constructor() { }

  maindata = of(1, 2, 3);

  ngOnInit(): void {

    this.maindata.pipe(
      tap( (x)=> console.log(x)),
      map( (x)=> x*10),
      tap( (x)=> console.log(x)),
      switchMap( (x) => this.multiplay(x).pipe(
        tap( (y)=> console.log(y))
      )),
      switchMap( (z) => this.multiplay2(z).pipe(
        tap( (z)=> console.log(z))
      )),
    ).subscribe();
  }

  multiplay(num:number): Observable<any>{
    return  of(num * 2);
  }

  multiplay2(num:number): Observable<any>{
    return  of(num * 10);
  }
}
