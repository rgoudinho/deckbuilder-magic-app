import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecksPageOptionsComponent } from './decks-page-options.component';

describe('DecksPageOptionsComponent', () => {
  let component: DecksPageOptionsComponent;
  let fixture: ComponentFixture<DecksPageOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecksPageOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecksPageOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
