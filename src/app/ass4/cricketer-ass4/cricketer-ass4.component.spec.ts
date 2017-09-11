import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketerAss4Component } from './cricketer-ass4.component';

describe('CricketerAss4Component', () => {
  let component: CricketerAss4Component;
  let fixture: ComponentFixture<CricketerAss4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketerAss4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketerAss4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
