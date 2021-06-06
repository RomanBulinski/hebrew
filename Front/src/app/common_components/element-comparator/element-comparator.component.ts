import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ElementForCompare} from '../../Model/element-for-compare';
import {HttpService} from '../../httpServices/http.service';
import {catchError, tap} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';
import {Letter} from '../../Model/letter';
import {EMPTY} from "rxjs";

@Component({
  selector: 'app-element-comparator',
  templateUrl: './element-comparator.component.html',
  styleUrls: ['./element-comparator.component.css']
})
export class ElementComparatorComponent implements OnInit, OnChanges {

  @Input('elementForCompare') elementForCompare: ElementForCompare;

  firstIngredient: string;
  secondIngredient: string;
  httpService: HttpService;

  allElements: any[];
  firstSet: string[];
  secondSet: string[];

  elementsAmount: FormControl;
  startGroup: FormGroup;
  outcom: string;
  elementFields: string[];

  constructor() {
    this.elementsAmount = new FormControl();
    this.startGroup = new FormGroup({
      elementsAmount: this.elementsAmount,
    });
  }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnChanges(): void {
    this.loadData();
  }

  private loadData(): void {

    this.firstIngredient = this.elementForCompare.firstIngredient;
    this.secondIngredient = this.elementForCompare.secondIngredient;
    this.httpService = this.elementForCompare.httpService;

    this.httpService.getAll().pipe(
      tap((elements) => {
        this.allElements = elements;
        this.firstSet = elements.map((ele) => ele[this.firstIngredient]);
        this.secondSet = elements.map((ele) => ele[this.secondIngredient]);
        this.elementFields = Object.keys(elements[0]);
      }),
      catchError((err) => {
        return EMPTY;
      })
    ).subscribe();
  }

  dropElement(event: CdkDragDrop<string[]>): void {
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
      if (!this.checkIfElementCorespondOnPosition(i, allElements, firstSet, secondSet)) {
        return false;
      }
    }
    return true;
  }

  // position is counted from 1, not from 0
  checkIfElementCorespondOnPosition(position: number,
                                    allElements: Letter[],
                                    firstSet: string[],
                                    secondSet: string[]): boolean {
    const firstIngredient = firstSet.slice(position - 1, position)[0];
    const secondIngredient = secondSet.slice(position - 1, position)[0];
    return secondIngredient === this.getSecondElementByFirstElemnt(firstIngredient, allElements);
  }

  private getSecondElementByFirstElemnt(firstIngredient: string, allElements: any[]): string {
    return allElements.filter((element) => element[this.firstIngredient] === firstIngredient)[0][this.secondIngredient];
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
    this.outcom = this.setOutcomByBoolean(this.checkIfAllElementsCorrespond(this.allElements, this.firstSet, this.secondSet));
  }

  setOutcomByBoolean(isAllElementCorrespond: boolean): string {
    return isAllElementCorrespond ? 'DOBRZE' : 'ZLE';
  }
}
