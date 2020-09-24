import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpasswordComponent } from './getpassword.component';

describe('GetpasswordComponent', () => {
  let component: GetpasswordComponent;
  let fixture: ComponentFixture<GetpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
