import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsListCompComponent } from './rooms-list-comp.component';

describe('RoomsListCompComponent', () => {
  let component: RoomsListCompComponent;
  let fixture: ComponentFixture<RoomsListCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomsListCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsListCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
