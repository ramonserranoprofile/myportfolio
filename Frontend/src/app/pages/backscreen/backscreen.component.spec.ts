import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackscreenComponent } from './backscreen.component';

describe('BackscreenComponent', () => {
  let component: BackscreenComponent;
  let fixture: ComponentFixture<BackscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackscreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
