import {Component, OnInit} from '@angular/core';
import {LettersHttpService} from '../../httpServices/letters-http.service';
import {FormGroup} from '@angular/forms';
import {ElementForCompare} from '../../Model/element-for-compare';
import {WordsHttpService} from '../../httpServices/words-http.service';


@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  // lettersAmount: FormControl;
  startGroup: FormGroup;

  letters = 'Letters';
  words1 = 'Words';

  elementForCompare: ElementForCompare;
  lettersForCompare: ElementForCompare;
  wordsForCompare: ElementForCompare;

  constructor(private lettersHttpService: LettersHttpService,
              private wordsHttpService: WordsHttpService) {

    this.lettersForCompare = {
      firstIngredient: 'letterh',
      secondIngredient: 'letterp',
      httpService: this.lettersHttpService
    };

    this.wordsForCompare = {
      firstIngredient: 'hebrew',
      secondIngredient: 'polish',
      httpService: this.wordsHttpService
    };

    this.elementForCompare = this.wordsForCompare;
  }

  ngOnInit(): void {
  }

  chooseLesson(lesson: string): void {
    if (lesson === 'words') {
      this.elementForCompare = this.wordsForCompare;
    } else if (lesson === 'letters') {
      this.elementForCompare = this.lettersForCompare;
    }
  }
}

