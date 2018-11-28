import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMultipleProjectsComponent } from './view-multiple-projects.component';

describe('ViewMultipleProjectsComponent', () => {
  let component: ViewMultipleProjectsComponent;
  let fixture: ComponentFixture<ViewMultipleProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMultipleProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMultipleProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
