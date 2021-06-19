import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ElementForCompare} from '../../Model/element-for-compare';
import {HttpService} from '../../httpServices/http.service';
import {catchError, tap} from 'rxjs/operators';
import {FormControl, FormGroup} from '@angular/forms';
import {Letter} from '../../Model/letter';
import {EMPTY} from 'rxjs';

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
  firstElementSet: string[];
  secondElementSet: string[];

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
        this.firstElementSet = elements.map((ele) => ele[this.firstIngredient]);
        this.secondElementSet = elements.map((ele) => ele[this.secondIngredient]);
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

  loadAmountOfElements(): void {
    // const amountForLoad = this.elementsAmount.value;
    // this.firstElementSet = this.allElements.slice(0, amountForLoad).map((ele) => ele[this.firstIngredient]);
    // this.secondElementSet = this.allElements.slice(0, amountForLoad).map((ele) => ele[this.secondIngredient]);
    this.loadAmountOfElementsLosowo();
  }

// TODO refactor code below
  loadAmountOfElementsLosowo(): void {

    this.firstElementSet = [];
    this.secondElementSet = [];

    const amountForLoad = this.elementsAmount.value;
    const amountAllELements = this.allElements.length;

    const indexiesForLoad = [];

    while (indexiesForLoad.length < amountForLoad) {
      const findedRandomIndex = Math.floor((Math.random() * amountAllELements) + 1);
      if (!indexiesForLoad.includes(findedRandomIndex)) {
        indexiesForLoad.push(findedRandomIndex);
      }
    }
    indexiesForLoad.forEach(
      (index) => {
        const element = this.allElements[index];
        console.log(element);
        this.firstElementSet.push(element[this.firstIngredient]);
        this.secondElementSet.push(element[this.secondIngredient]);
      });
  }

  changeOrder(): void{
    this.firstIngredient = this.elementForCompare.secondIngredient;
    this.secondIngredient = this.elementForCompare.firstIngredient;
  }

  unsorted(): void {
    this.secondElementSet = this._unsorted(this.secondElementSet);
    this.firstElementSet = this.firstElementSet.sort();
  }

  _unsorted(letters: string[]): string[] {
    return letters.sort().reverse();
  }

  check(): void {
    this.outcom = this.setOutcomByBoolean(this.checkIfAllElementsCorrespond(this.allElements, this.firstElementSet, this.secondElementSet));
  }

  setOutcomByBoolean(isAllElementCorrespond: boolean): string {
    return isAllElementCorrespond ? 'DOBRZE' : 'ZLE';
  }
}

