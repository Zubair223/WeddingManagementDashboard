import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageWazaComponent } from './manage-waza.component';

describe('ManageWazaComponent', () => {
  let component: ManageWazaComponent;
  let fixture: ComponentFixture<ManageWazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageWazaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageWazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
