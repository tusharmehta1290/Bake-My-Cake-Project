import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderRequestsComponent } from './admin-order-requests.component';

describe('AdminOrderRequestsComponent', () => {
  let component: AdminOrderRequestsComponent;
  let fixture: ComponentFixture<AdminOrderRequestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminOrderRequestsComponent]
    });
    fixture = TestBed.createComponent(AdminOrderRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
