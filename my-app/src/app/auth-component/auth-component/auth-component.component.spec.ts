import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponentComponent } from './auth-component.component';

describe('AuthComponentComponent', () => {
  let component: AuthComponentComponent;
  let fixture: ComponentFixture<AuthComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
