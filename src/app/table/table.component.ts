import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AdventureTimeService } from '../services/adventure-time.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  characters: Observable<any[]>;
  columns: string[];

  constructor(private atService: AdventureTimeService) {
  }

  ngOnInit() {
    this.columns = this.atService.getColumns();
    this.characters = this.atService.getCharacters();
  }

}
