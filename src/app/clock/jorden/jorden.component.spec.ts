import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JordenComponent } from './jorden.component';

describe('JordenComponent', () => {
  let component: JordenComponent;
  let fixture: ComponentFixture<JordenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JordenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JordenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
