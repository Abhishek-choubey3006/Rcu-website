import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiredcontainerComponent } from './thiredcontainer.component';

describe('ThiredcontainerComponent', () => {
  let component: ThiredcontainerComponent;
  let fixture: ComponentFixture<ThiredcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThiredcontainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThiredcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
