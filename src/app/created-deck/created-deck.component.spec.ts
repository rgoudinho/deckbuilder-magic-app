import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedDeckComponent } from './created-deck.component';

describe('CreatedDeckComponent', () => {
  let component: CreatedDeckComponent;
  let fixture: ComponentFixture<CreatedDeckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedDeckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
