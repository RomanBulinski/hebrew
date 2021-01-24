import {Component, OnInit} from '@angular/core';
import {LettersHttpService} from '../../httpServices/letters-http.service';
import {tap} from 'rxjs/operators';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Letter} from '../../Model/letter';

@Component({
  selector: 'app-alfa',
  templateUrl: './alfa.component.html',
  styleUrls: ['./alfa.component.css']
})
export class AlfaComponent implements OnInit {

  constructor(private lettersHttpService: LettersHttpService) {
  }

  letter = 'a';

  letters: Letter[];
  hebrewLetters: string[];
  polishLetters: string[];

  ngOnInit(): void {
    this.lettersHttpService.getAllLetters().pipe(
      tap((lettersFromBackend) => {
        this.letters = lettersFromBackend;
        this.hebrewLetters = lettersFromBackend.slice(0, 4).map((ele) => ele.letterh);
        this.polishLetters = lettersFromBackend.slice(0, 4).map((ele) => ele.letterp);
      })
    ).subscribe();
  }

  dropElement(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    console.log(this.isAllLettersCorrespond(this.letters, this.hebrewLetters, this.polishLetters));
  }

  isAllLettersCorrespond(letters: Letter[],
                         hebrewLetters: string[],
                         polishLetters: string[]): boolean {
    for (let i = 1; i<hebrewLetters.length+1; i++) {
      if (!this.isLettersCorespondOnPosition(i, letters, hebrewLetters, polishLetters)) {
        return  false;
      }
    }
    return true;
  }

  // position is counted from 1, not from 0
  isLettersCorespondOnPosition(position: number,
                               letters: Letter[],
                               hebrewLetters: string[],
                               polishLetters: string[]): boolean {
    const hebrL = hebrewLetters.slice(position - 1, position)[0];
    const polishL = polishLetters.slice(position - 1, position)[0];
    return polishL === this.getPolishLetterByHebrewLetter(hebrL, letters);
  }

  getPolishLetterByHebrewLetter(hebrewLetter: string, letters: Letter[]): string {
    return letters.filter((element) => element.letterh === hebrewLetter)[0].letterp;
  }

}
