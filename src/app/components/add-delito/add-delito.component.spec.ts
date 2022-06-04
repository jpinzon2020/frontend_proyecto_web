import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDelitoComponent } from './add-delito.component';

describe('AddDelitoComponent', () => {
  let component: AddDelitoComponent;
  let fixture: ComponentFixture<AddDelitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDelitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDelitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
