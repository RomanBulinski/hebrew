import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {ElementForCompare} from '../../Model/element-for-compare';
import {HttpService} from "../../httpServices/http.service";
import {tap} from "rxjs/operators";
import {LettersHttpService} from "../../httpServices/letters-http.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Letter} from "../../Model/letter";

@Component({
  selector: 'app-element-comparator',
  templateUrl: './element-comparator.component.html',
  styleUrls: ['./element-comparator.component.css']
})
export class ElementComparatorComponent implements OnInit {

  @Input('elementForCompare') elementForCompare: ElementForCompare;
  @Input() x: string;

  firstIngredient: string;
  secondIngredient: string;
  httpService: HttpService;

  allElements: any[];
  firstSet: string[];
  secondSet: string[];

  elementsAmount: FormControl;
  startGroup: FormGroup;

  constructor() {
    this.elementsAmount = new FormControl();
    this.startGroup = new FormGroup({
      elementsAmount: this.elementsAmount,
    });
  }

  ngOnInit(): void {

    this.firstIngredient = this.elementForCompare.firstIngredient;
    this.secondIngredient = this.elementForCompare.secondIngredient;
    this.httpService = this.elementForCompare.httpService;

    this.httpService.getAll().pipe(
      tap((elements) => {
        this.allElements = elements;
        this.firstSet = elements.map((ele) => ele[this.firstIngredient] );
        this.secondSet = elements.map((ele) => ele[this.secondIngredient]);
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
  }

  checkIfAllElementsCorrespond(allElements: any[],
                               firstSet: string[],
                               secondSet: string[]): boolean {
    for (let i = 1; i < firstSet.length + 1; i++) {
      if (!this.chackIfElementCorespondOnPosition(i, allElements, firstSet, secondSet)) {
        return false;
      }
    }
    return true;
  }

  // position is counted from 1, not from 0
  chackIfElementCorespondOnPosition(position: number,
                                    allElements: Letter[],
                                    firstSet: string[],
                                    secondSet: string[]): boolean {
    const firstElement = firstSet.slice(position - 1, position)[0];
    const seconElement = secondSet.slice(position - 1, position)[0];
    return seconElement === this.getSecondElementByFirstElemnt(firstElement, allElements);
  }

  private getSecondElementByFirstElemnt(firstElement: string, allElements: any[]): string {
    return allElements.filter((element) => element[this.firstIngredient] === firstElement)[0][this.secondIngredient];
  }

  loadAmountOfLetters(): void {
    const amount = this.elementsAmount.value;
    this.firstSet = this.allElements.slice(0, amount).map((ele) => ele[this.firstIngredient]);
    this.secondSet = this.allElements.slice(0, amount).map((ele) => ele[this.secondIngredient]);
  }

  unsorted(): void {
    this.secondSet = this._unsorted(this.secondSet);
    this.firstSet = this.firstSet.sort();
  }

  _unsorted(letters: string[]): string[] {
    return letters.sort().reverse();
  }

  check(): void {
    console.log(this.checkIfAllElementsCorrespond(this.allElements, this.firstSet, this.secondSet));
  }


}
