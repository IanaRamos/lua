import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaseMinguantePage } from './fase-minguante.page';

describe('FaseMinguantePage', () => {
  let component: FaseMinguantePage;
  let fixture: ComponentFixture<FaseMinguantePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaseMinguantePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaseMinguantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
