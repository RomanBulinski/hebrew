import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {LettersHttpService} from "../../httpServices/letters-http.service";

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.css']
})
export class LettersComponent implements AfterViewInit {

  // dataLetters: Letter[] = [];
  dataLetters = new MatTableDataSource();
  displayedColumns = ['id', 'letterp', 'letterh', 'letterh2', 'nazwa', 'wartoscnumeryczna', 'opis' ];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private lettersService: LettersHttpService) {
    this.lettersService.getAll()
      .subscribe(letters => {
        this.dataLetters = new MatTableDataSource(letters);
        this.dataLetters.sort = this.sort;
        console.log(letters)
      });
  }

  ngAfterViewInit() {
  }

}
