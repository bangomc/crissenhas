import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelDialogTemplateComponent } from './del-dialog-template.component';

describe('DelDialogTemplateComponent', () => {
  let component: DelDialogTemplateComponent;
  let fixture: ComponentFixture<DelDialogTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelDialogTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelDialogTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
