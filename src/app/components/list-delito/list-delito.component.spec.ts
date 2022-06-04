import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDelitoComponent } from './list-delito.component';

describe('ListDelitoComponent', () => {
  let component: ListDelitoComponent;
  let fixture: ComponentFixture<ListDelitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDelitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDelitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
