import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App.ErrorHandlerComponent } from './app.error-handler.component';

describe('App.ErrorHandlerComponent', () => {
  let component: App.ErrorHandlerComponent;
  let fixture: ComponentFixture<App.ErrorHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App.ErrorHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App.ErrorHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
