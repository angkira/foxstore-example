import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomTableComponent } from './random-table.component';

describe('RandomTableComponent', () => {
  let component: RandomTableComponent;
  let fixture: ComponentFixture<RandomTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
