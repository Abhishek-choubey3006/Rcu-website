import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourtComponent } from './fourt.component';

describe('FourtComponent', () => {
  let component: FourtComponent;
  let fixture: ComponentFixture<FourtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});