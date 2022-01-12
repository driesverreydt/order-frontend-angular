import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoGroupComponent } from './logo-group.component';

describe('LogoGroupComponent', () => {
  let component: LogoGroupComponent;
  let fixture: ComponentFixture<LogoGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
