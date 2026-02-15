import { TestBed } from '@angular/core/testing';

import { CardServce } from './card-service';

describe('CardServce', () => {
  let service: CardServce;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardServce);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
