import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawsuitViewComponent } from './lawsuit-view.component';

describe('LawsuitViewComponent', () => {
  let component: LawsuitViewComponent;
  let fixture: ComponentFixture<LawsuitViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawsuitViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawsuitViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
