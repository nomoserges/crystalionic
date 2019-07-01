import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationPage } from './declaration.page';

describe('DeclarationPage', () => {
  let component: DeclarationPage;
  let fixture: ComponentFixture<DeclarationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
