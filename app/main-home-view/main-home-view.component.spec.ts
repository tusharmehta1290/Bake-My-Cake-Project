import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHomeViewComponent } from './main-home-view.component';

describe('MainHomeViewComponent', () => {
  let component: MainHomeViewComponent;
  let fixture: ComponentFixture<MainHomeViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainHomeViewComponent]
    });
    fixture = TestBed.createComponent(MainHomeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
