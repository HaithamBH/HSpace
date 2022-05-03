import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSlideComponent } from './right-slide.component';

describe('RightSlideComponent', () => {
  let component: RightSlideComponent;
  let fixture: ComponentFixture<RightSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
