import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFurnitureComponent } from './show-furniture.component';

describe('ShowFurnitureComponent', () => {
  let component: ShowFurnitureComponent;
  let fixture: ComponentFixture<ShowFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFurnitureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
