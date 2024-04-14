import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSortComponent } from './quick-sort.component';

describe('QuickSortComponent', () => {
  let component: QuickSortComponent;
  let fixture: ComponentFixture<QuickSortComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickSortComponent]
    });
    fixture = TestBed.createComponent(QuickSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
