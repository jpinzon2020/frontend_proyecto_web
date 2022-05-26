import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoblacionComponent } from './add-poblacion.component';

describe('AddPoblacionComponent', () => {
  let component: AddPoblacionComponent;
  let fixture: ComponentFixture<AddPoblacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPoblacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPoblacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
