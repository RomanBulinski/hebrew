import {Component, OnInit} from '@angular/core';
import {LettersService} from '../../httpServices/letters.service';
import {Letter} from '../../Model/letter';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.css']
})
export class LettersComponent implements OnInit {

  // dataLetters: Letter[] = [];
  dataLetters: MatTableDataSource<Letter>;
  displayedColumns = ['id', 'letterp', 'letterh', 'letterh2', 'nazwa', 'wartoscnumeryczna', 'opis' ];

  constructor(private lettersService: LettersService) {
    this.lettersService.getLetters()
      .subscribe(letters => {
        this.dataLetters = new MatTableDataSource(letters);
        console.log(letters)
      });
  }

  ngOnInit(): void {

  }

}
