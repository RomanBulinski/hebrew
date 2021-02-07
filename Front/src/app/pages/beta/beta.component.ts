import {Component, OnInit} from '@angular/core';
import {ElementForCompare} from '../../Model/element-for-compare';
import {WordsHttpService} from '../../httpServices/words-http.service';



@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {

  elementForCompare: ElementForCompare;

  constructor(private wordsHttpService: WordsHttpService) {

    this.elementForCompare = {
      firstIngredient: "hebrew",
      secondIngredient: "polish",
      httpService: this.wordsHttpService
    };
  }

  ngOnInit(): void {


  }


}
