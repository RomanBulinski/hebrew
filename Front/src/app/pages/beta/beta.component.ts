import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {map, switchMap, tap} from "rxjs/operators";
import {WordsHttpService} from "../../httpServices/words-http.service";
import {Word} from "../../Model/word";


@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css']
})
export class BetaComponent implements OnInit {

  words: Word[];
  hebrewWords: string[];

  constructor(private wordsHttpService: WordsHttpService ) {

    this.wordsHttpService.getAll().pipe(
      tap( (wordsFromBackend) =>{
        this.words = wordsFromBackend;
        this.hebrewWords = wordsFromBackend.map( (ele)=> ele.hebrew);
        console.log(this.hebrewWords);
      }
      )).subscribe();
  }

  ngOnInit(): void {


  }


}
