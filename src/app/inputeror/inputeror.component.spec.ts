import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputerorComponent } from './inputeror.component';

describe('InputerorComponent', () => {
  let component: InputerorComponent;
  let fixture: ComponentFixture<InputerorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputerorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputerorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
