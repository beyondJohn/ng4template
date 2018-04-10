import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedundantComponent } from './redundant.component';

describe('RedundantComponent', () => {
  let component: RedundantComponent;
  let fixture: ComponentFixture<RedundantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedundantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedundantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
