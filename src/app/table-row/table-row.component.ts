import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {

  @Input() character: any;
  @Input() columns: string[];

  constructor() { }

  ngOnInit() {
  }

}
