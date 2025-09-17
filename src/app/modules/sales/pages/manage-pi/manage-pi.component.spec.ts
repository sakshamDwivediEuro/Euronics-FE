import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePiComponent } from './manage-pi.component';

describe('ManagePiComponent', () => {
  let component: ManagePiComponent;
  let fixture: ComponentFixture<ManagePiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagePiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagePiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
