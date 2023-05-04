import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdetailsComponent } from './udetails.component';

describe('UdetailsComponent', () => {
  let component: UdetailsComponent;
  let fixture: ComponentFixture<UdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
