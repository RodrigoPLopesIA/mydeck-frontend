import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mydecks } from './mydecks';

describe('Mydecks', () => {
  let component: Mydecks;
  let fixture: ComponentFixture<Mydecks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mydecks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mydecks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
