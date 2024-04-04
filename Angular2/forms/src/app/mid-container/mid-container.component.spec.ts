import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MidContainerComponent } from './mid-container.component';

describe('MidContainerComponent', () => {
  let component: MidContainerComponent;
  let fixture: ComponentFixture<MidContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MidContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MidContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
