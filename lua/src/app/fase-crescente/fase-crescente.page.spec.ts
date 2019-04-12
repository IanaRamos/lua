import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaseCrescentePage } from './fase-crescente.page';

describe('FaseCrescentePage', () => {
  let component: FaseCrescentePage;
  let fixture: ComponentFixture<FaseCrescentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaseCrescentePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaseCrescentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
