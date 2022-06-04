import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrupoArmadoComponent } from './add-grupo-armado.component';

describe('AddGrupoArmadoComponent', () => {
  let component: AddGrupoArmadoComponent;
  let fixture: ComponentFixture<AddGrupoArmadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGrupoArmadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGrupoArmadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
