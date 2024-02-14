import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSuperadminComponent } from './manage-superadmin.component';

describe('ManageSuperadminComponent', () => {
  let component: ManageSuperadminComponent;
  let fixture: ComponentFixture<ManageSuperadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageSuperadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageSuperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
