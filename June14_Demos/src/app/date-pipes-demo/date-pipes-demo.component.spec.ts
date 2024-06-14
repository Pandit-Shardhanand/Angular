import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePipesDemoComponent } from './date-pipes-demo.component';

describe('DatePipesDemoComponent', () => {
  let component: DatePipesDemoComponent;
  let fixture: ComponentFixture<DatePipesDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatePipesDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePipesDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
