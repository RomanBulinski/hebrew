import {Component, OnInit} from '@angular/core';
import {DBInitHttpService} from "../../httpServices/dbinit-http.service";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private dBInitHttpService: DBInitHttpService) {
  }

  ngOnInit(): void {
  }

  public initDB(): void {
    this.dBInitHttpService.dataBaseInit().subscribe();
  }
}

