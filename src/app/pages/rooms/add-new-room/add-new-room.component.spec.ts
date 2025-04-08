import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewRoomComponent } from './add-new-room.component';

describe('AddNewRoomComponent', () => {
  let component: AddNewRoomComponent;
  let fixture: ComponentFixture<AddNewRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewRoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
