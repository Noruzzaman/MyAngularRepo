import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFurnitureComponent } from './add-edit-furniture.component';

describe('AddEditFurnitureComponent', () => {
  let component: AddEditFurnitureComponent;
  let fixture: ComponentFixture<AddEditFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFurnitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
