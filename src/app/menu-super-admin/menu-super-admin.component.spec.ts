import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSuperAdminComponent } from './menu-super-admin.component';

describe('MenuSuperAdminComponent', () => {
  let component: MenuSuperAdminComponent;
  let fixture: ComponentFixture<MenuSuperAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSuperAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
