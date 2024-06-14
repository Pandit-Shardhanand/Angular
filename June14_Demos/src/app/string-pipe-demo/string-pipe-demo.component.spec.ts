import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringPipeDemoComponent } from './string-pipe-demo.component';

describe('StringPipeDemoComponent', () => {
  let component: StringPipeDemoComponent;
  let fixture: ComponentFixture<StringPipeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringPipeDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringPipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
