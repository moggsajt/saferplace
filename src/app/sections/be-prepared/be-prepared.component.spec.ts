import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BePreparedComponent } from './be-prepared.component';

describe('BePreparedComponent', () => {
  let component: BePreparedComponent;
  let fixture: ComponentFixture<BePreparedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BePreparedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BePreparedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
