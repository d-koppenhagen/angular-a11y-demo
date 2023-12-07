import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertFormComponent } from './alert-form.component';

describe('AlertFormComponent', () => {
  let component: AlertFormComponent;
  let fixture: ComponentFixture<AlertFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
