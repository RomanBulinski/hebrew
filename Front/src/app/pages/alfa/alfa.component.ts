import {Component, OnInit} from '@angular/core';
import {LettersHttpService} from '../../httpServices/letters-http.service';
import {tap} from 'rxjs/operators';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Letter} from '../../Model/letter';
import {FormControl, FormGroup} from '@angular/forms';
import {ElementForCompare} from '../../Model/element-for-compare';

@Component({
  selector: 'app-alfa',
  templateUrl: './alfa.component.html',
  styleUrls: ['./alfa.component.css']
})
export class AlfaComponent implements OnInit {

  lettersAmount: FormControl;
  startGroup: FormGroup;

  letter = 'a';
  elementForCompare: ElementForCompare;

  constructor(private lettersHttpService: LettersHttpService) {
    this.lettersAmount = new FormControl();
    this.startGroup = new FormGroup({
      lettersAmount: this.lettersAmount,
    });

    this.elementForCompare = {
      firstIngredient: "letterh",
      secondIngredient: "letterp",
      httpService: this.lettersHttpService
    };
  }

  ngOnInit(): void {}

}
