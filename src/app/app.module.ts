import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';

import { AdventureTimeService } from './services/adventure-time.service';
import { TableRowIncorrectComponent } from './table-row-incorrect/table-row-incorrect.component';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TableRowComponent,
    TableRowIncorrectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AdventureTimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
