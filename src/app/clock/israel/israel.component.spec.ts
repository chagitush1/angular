import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsraelComponent } from './israel.component';

describe('IsraelComponent', () => {
  let component: IsraelComponent;
  let fixture: ComponentFixture<IsraelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsraelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsraelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
