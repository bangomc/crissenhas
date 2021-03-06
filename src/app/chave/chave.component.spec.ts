import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaveComponent } from './chave.component';

describe('ChaveComponent', () => {
  let component: ChaveComponent;
  let fixture: ComponentFixture<ChaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
