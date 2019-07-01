import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuemployePage } from './menuemploye.page';

describe('MenuemployePage', () => {
  let component: MenuemployePage;
  let fixture: ComponentFixture<MenuemployePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuemployePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuemployePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
