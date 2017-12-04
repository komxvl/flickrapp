import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentImageComponent } from './current-image.component';

describe('CurrentImageComponent', () => {
  let component: CurrentImageComponent;
  let fixture: ComponentFixture<CurrentImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
