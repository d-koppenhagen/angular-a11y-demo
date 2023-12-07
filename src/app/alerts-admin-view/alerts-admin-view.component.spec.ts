import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsAdminViewComponent } from './alerts-admin-view.component';

describe('AlertsAdminViewComponent', () => {
  let component: AlertsAdminViewComponent;
  let fixture: ComponentFixture<AlertsAdminViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertsAdminViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertsAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
