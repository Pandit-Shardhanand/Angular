import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitInWordComponent } from './digit-in-word.component';

describe('DigitInWordComponent', () => {
  let component: DigitInWordComponent;
  let fixture: ComponentFixture<DigitInWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitInWordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitInWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
