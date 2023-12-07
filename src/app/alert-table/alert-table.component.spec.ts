import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertTableComponent } from './alert-table.component';

describe('AlertTableComponent', () => {
  let component: AlertTableComponent;
  let fixture: ComponentFixture<AlertTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
