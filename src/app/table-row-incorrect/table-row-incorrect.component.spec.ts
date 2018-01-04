import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowIncorrectComponent } from './table-row-incorrect.component';

describe('TableRowIncorrectComponent', () => {
  let component: TableRowIncorrectComponent;
  let fixture: ComponentFixture<TableRowIncorrectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableRowIncorrectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRowIncorrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
