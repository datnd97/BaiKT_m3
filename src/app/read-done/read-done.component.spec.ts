import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadDoneComponent } from './read-done.component';

describe('ReadDoneComponent', () => {
  let component: ReadDoneComponent;
  let fixture: ComponentFixture<ReadDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
