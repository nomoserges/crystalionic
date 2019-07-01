import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuvolontairePage } from './menuvolontaire.page';

describe('MenuvolontairePage', () => {
  let component: MenuvolontairePage;
  let fixture: ComponentFixture<MenuvolontairePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuvolontairePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuvolontairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
