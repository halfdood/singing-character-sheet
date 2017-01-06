/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FaeComponent } from './fae.component';

describe('FaeComponent', () => {
  let component: FaeComponent;
  let fixture: ComponentFixture<FaeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
