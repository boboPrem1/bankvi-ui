import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateformsComponent } from './plateforms.component';

describe('PlateformsComponent', () => {
  let component: PlateformsComponent;
  let fixture: ComponentFixture<PlateformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlateformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlateformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
