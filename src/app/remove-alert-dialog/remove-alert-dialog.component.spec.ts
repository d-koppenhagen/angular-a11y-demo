import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAlertDialogComponent } from './remove-alert-dialog.component';

describe('RemoveAlertDialogComponent', () => {
  let component: RemoveAlertDialogComponent;
  let fixture: ComponentFixture<RemoveAlertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveAlertDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoveAlertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
