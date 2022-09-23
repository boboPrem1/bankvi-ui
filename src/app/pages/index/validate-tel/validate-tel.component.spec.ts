import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateTelComponent } from './validate-tel.component';

describe('ValidateTelComponent', () => {
  let component: ValidateTelComponent;
  let fixture: ComponentFixture<ValidateTelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidateTelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidateTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
