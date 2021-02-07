import {Component, OnInit} from '@angular/core';
import {LettersHttpService} from '../../httpServices/letters-http.service';
import {FormGroup} from '@angular/forms';
import {ElementForCompare} from '../../Model/element-for-compare';
import {WordsHttpService} from "../../httpServices/words-http.service";


@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  // lettersAmount: FormControl;
  startGroup: FormGroup;

  letters = 'Letters';
  words1 = 'Words 1';
  elementForCompare: ElementForCompare;
  lettersForCompare: ElementForCompare;
  words1ForCompare: ElementForCompare;

  constructor(private lettersHttpService: LettersHttpService,
              private wordsHttpService: WordsHttpService) {

    this.lettersForCompare = {
      firstIngredient: 'letterh',
      secondIngredient: 'letterp',
      httpService: this.lettersHttpService
    };

    this.words1ForCompare = {
      firstIngredient: 'hebrew',
      secondIngredient: 'polish',
      httpService: this.wordsHttpService
    };

    this.elementForCompare = this.lettersForCompare;
  }

  ngOnInit(): void {
  }

  chooseLesson(lesson: string): void {
    if (lesson === 'words1') {
      this.elementForCompare = this.words1ForCompare;
    }else{
      this.elementForCompare = this.lettersForCompare;
    }
  }


}
