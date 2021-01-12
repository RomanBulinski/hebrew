import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-letter-card',
  templateUrl: './letter-card.component.html',
  styleUrls: ['./letter-card.component.css']
})
export class LetterCardComponent implements OnInit {

  constructor() { }

  @Input()letter: string;

  ngOnInit(): void {

    // this.letter = 'a';

  }

}
