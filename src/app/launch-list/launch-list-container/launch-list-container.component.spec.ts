import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchListContainerComponent } from './launch-list-container.component';

describe('LaunchListContainerComponent', () => {
  let component: LaunchListContainerComponent;
  let fixture: ComponentFixture<LaunchListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
