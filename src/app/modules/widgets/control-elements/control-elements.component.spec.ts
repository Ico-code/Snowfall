import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlElementsComponent } from './control-elements.component';

describe('ControlElementsComponent', () => {
  let component: ControlElementsComponent;
  let fixture: ComponentFixture<ControlElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlElementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
