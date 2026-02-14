import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deckdetails } from './deckdetails';

describe('Deckdetails', () => {
  let component: Deckdetails;
  let fixture: ComponentFixture<Deckdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deckdetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deckdetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
