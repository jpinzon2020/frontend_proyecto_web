import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPoblacionComponent } from './list-poblacion.component';

describe('ListPoblacionComponent', () => {
  let component: ListPoblacionComponent;
  let fixture: ComponentFixture<ListPoblacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPoblacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPoblacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
