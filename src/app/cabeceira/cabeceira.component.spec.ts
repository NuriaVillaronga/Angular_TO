import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabaceiraComponent } from './cabaceira.component';

describe('CabaceiraComponent', () => {
  let component: CabaceiraComponent;
  let fixture: ComponentFixture<CabaceiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabaceiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabaceiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
