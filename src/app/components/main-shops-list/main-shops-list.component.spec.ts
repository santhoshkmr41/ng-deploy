import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainShopsListComponent } from './main-shops-list.component';

describe('MainShopsListComponent', () => {
  let component: MainShopsListComponent;
  let fixture: ComponentFixture<MainShopsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainShopsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainShopsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
