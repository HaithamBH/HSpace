import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSlideComponent } from './left-slide.component';

describe('LeftSlideComponent', () => {
  let component: LeftSlideComponent;
  let fixture: ComponentFixture<LeftSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
