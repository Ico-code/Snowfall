import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowfallBgComponent } from './snowfall-bg.component';

describe('SnowfallBgComponent', () => {
  let component: SnowfallBgComponent;
  let fixture: ComponentFixture<SnowfallBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnowfallBgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnowfallBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
