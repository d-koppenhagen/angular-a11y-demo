import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferredLoadingViewComponent } from './deferred-loading-view.component';

describe('DeferredLoadingViewComponent', () => {
  let component: DeferredLoadingViewComponent;
  let fixture: ComponentFixture<DeferredLoadingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferredLoadingViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferredLoadingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
