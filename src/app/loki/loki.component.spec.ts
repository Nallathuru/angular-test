import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LokiComponent } from './loki.component';

describe('LokiComponent', () => {
  let component: LokiComponent;
  let fixture: ComponentFixture<LokiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LokiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LokiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
