import { Component, OnInit } from '@angular/core';
import {LettersHttpService} from "../../httpServices/letters-http.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-alfa',
  templateUrl: './alfa.component.html',
  styleUrls: ['./alfa.component.css']
})
export class AlfaComponent implements OnInit {

  constructor( private lettersHttpService: LettersHttpService) {}

  letter = 'a';

  letters = [];

  ngOnInit(): void {
    this.lettersHttpService.getLetters().pipe(
      tap(  (res)=>  this.letters = res.map(  (ele)=>ele.letterh ))
    ).subscribe();
  }

}
