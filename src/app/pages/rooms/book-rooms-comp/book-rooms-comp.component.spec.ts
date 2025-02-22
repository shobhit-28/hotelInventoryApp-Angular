import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRoomsCompComponent } from './book-rooms-comp.component';

describe('BookRoomsCompComponent', () => {
  let component: BookRoomsCompComponent;
  let fixture: ComponentFixture<BookRoomsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookRoomsCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookRoomsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
