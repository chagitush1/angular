import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BelgiunComponent } from './belgiun.component';

describe('BelgiunComponent', () => {
  let component: BelgiunComponent;
  let fixture: ComponentFixture<BelgiunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BelgiunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BelgiunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
