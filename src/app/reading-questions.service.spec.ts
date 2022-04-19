import { TestBed } from '@angular/core/testing';

import { ReadingQuestionsService } from './reading-questions.service';

describe('ReadingQuestionsService', () => {
  let service: ReadingQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadingQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
