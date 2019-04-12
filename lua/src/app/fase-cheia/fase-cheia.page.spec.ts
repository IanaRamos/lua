import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaseCheiaPage } from './fase-cheia.page';

describe('FaseCheiaPage', () => {
  let component: FaseCheiaPage;
  let fixture: ComponentFixture<FaseCheiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaseCheiaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaseCheiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
