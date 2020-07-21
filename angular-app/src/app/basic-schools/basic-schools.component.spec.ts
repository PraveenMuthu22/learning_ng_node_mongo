import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSchoolsComponent } from './basic-schools.component';

describe('BasicSchoolsComponent', () => {
  let component: BasicSchoolsComponent;
  let fixture: ComponentFixture<BasicSchoolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicSchoolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSchoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
