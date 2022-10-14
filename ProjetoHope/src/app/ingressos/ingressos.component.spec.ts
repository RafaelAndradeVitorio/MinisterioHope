/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IngressosComponent } from './ingressos.component';

describe('IngressosComponent', () => {
  let component: IngressosComponent;
  let fixture: ComponentFixture<IngressosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngressosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngressosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
