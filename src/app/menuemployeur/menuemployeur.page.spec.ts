import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuemployeurPage } from './menuemployeur.page';

describe('MenuemployeurPage', () => {
  let component: MenuemployeurPage;
  let fixture: ComponentFixture<MenuemployeurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuemployeurPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuemployeurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
