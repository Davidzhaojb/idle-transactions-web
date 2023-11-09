import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdleHallComponent } from './idle-hall.component';

describe('IdleHallComponent', () => {
  let component: IdleHallComponent;
  let fixture: ComponentFixture<IdleHallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdleHallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdleHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
