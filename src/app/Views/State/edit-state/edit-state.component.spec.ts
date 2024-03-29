import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStateComponent } from './edit-state.component';

describe('EditStateComponent', () => {
  let component: EditStateComponent;
  let fixture: ComponentFixture<EditStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditStateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
