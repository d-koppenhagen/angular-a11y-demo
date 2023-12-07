import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertRegionComponent } from './alert-region.component';

describe('AlertRegionComponent', () => {
  let component: AlertRegionComponent;
  let fixture: ComponentFixture<AlertRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertRegionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
