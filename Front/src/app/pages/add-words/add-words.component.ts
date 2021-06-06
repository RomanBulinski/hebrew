import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {WordsHttpService} from '../../httpServices/words-http.service';
import {Word} from '../../Model/word';

@Component({
  selector: 'app-add-words',
  templateUrl: './add-words.component.html',
  styleUrls: ['./add-words.component.css']
})
export class AddWordsComponent implements OnInit {

  constructor( private wordsHttpService: WordsHttpService ) {
  }

  addWord: FormGroup;

  hebrew = new FormControl('');
  pronunciation = new FormControl('');
  polish = new FormControl('');
  description = new FormControl('');

  ngOnInit(): void {

    this.addWord = new FormGroup({
      hebrew: this.hebrew,
      pronunciation: this.pronunciation,
      polish: this.polish,
      description: this.description,
    });
  }

  public saveWord(): void {
    console.log(this.hebrew.value);

    const word: Word = {
      hebrew: this.hebrew.value,
      pronunciation: this.pronunciation.value,
      polish: this.polish.value,
      description: this.description.value,
    };

    this.wordsHttpService.save( word ).subscribe();
  }

}
