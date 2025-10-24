import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSlideToggleComponent } from './test-slide-toggle.component';

describe('TestSlideToggleComponent', () => {
  let component: TestSlideToggleComponent;
  let fixture: ComponentFixture<TestSlideToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestSlideToggleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSlideToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
