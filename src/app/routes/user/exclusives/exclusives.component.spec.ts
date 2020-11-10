import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExclusivesComponent } from './exclusives.component';

describe('ExclusivesComponent', () => {
  let component: ExclusivesComponent;
  let fixture: ComponentFixture<ExclusivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExclusivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExclusivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
