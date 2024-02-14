import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageChildsComponent } from './manage-childs.component';

describe('ManageChildsComponent', () => {
  let component: ManageChildsComponent;
  let fixture: ComponentFixture<ManageChildsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageChildsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageChildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
