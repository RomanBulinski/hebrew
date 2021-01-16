import { Component, OnInit } from '@angular/core';
import {LettersHttpService} from "../../httpServices/letters-http.service";
import {tap} from "rxjs/operators";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-alfa',
  templateUrl: './alfa.component.html',
  styleUrls: ['./alfa.component.css']
})
export class AlfaComponent implements OnInit {

  constructor( private lettersHttpService: LettersHttpService) {}

  letter = 'a';

  hebrewLetters = [];
  polishLetters = [];

  ngOnInit(): void {
    this.lettersHttpService.getLetters().pipe(
      tap(  (res)=>  {
        this.hebrewLetters = res.map(  (ele)=>ele.letterh );
        this.polishLetters = res.map(  (ele)=>ele.letterp )
      })
    ).subscribe();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }


}
