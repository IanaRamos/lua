import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaseNovaPage } from './fase-nova.page';

describe('FaseNovaPage', () => {
  let component: FaseNovaPage;
  let fixture: ComponentFixture<FaseNovaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaseNovaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaseNovaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
