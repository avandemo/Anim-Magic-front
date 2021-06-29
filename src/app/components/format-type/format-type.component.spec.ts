import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatTypeComponent } from './format-type.component';

describe('FormatTypeComponent', () => {
  let component: FormatTypeComponent;
  let fixture: ComponentFixture<FormatTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
