import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertTableEntryComponent } from './alert-table-entry.component';

describe('AlertTableEntryComponent', () => {
  let component: AlertTableEntryComponent;
  let fixture: ComponentFixture<AlertTableEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertTableEntryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertTableEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
