import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LawsuitListComponent } from './lawsuit-list.component';

describe('LawsuitListComponent', () => {
  let component: LawsuitListComponent;
  let fixture: ComponentFixture<LawsuitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LawsuitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LawsuitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
