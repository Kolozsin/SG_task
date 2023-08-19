import { TestBed } from '@angular/core/testing';
import { RandomNumberGeneratorServiceImpl } from './random-number-generator.service.IMPL';


describe('RandomNumberGeneratorService', () => {
  let rngService: RandomNumberGeneratorServiceImpl;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [RandomNumberGeneratorServiceImpl]});
    rngService = TestBed.inject(RandomNumberGeneratorServiceImpl);
  });

  it('should be created', () => {
    expect(rngService).toBeTruthy();
  });

  it('should generate an array of random numbers', () => {
    const lengthOfTheArray = 5;
    const maxNum = 10;

    const result = rngService.generateArrayOfRandomNumbers(lengthOfTheArray, maxNum);

    expect(result.length).toBe(lengthOfTheArray);
    result.forEach((num) => {
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(maxNum);
    });
  });

  it('should return an empty array if maxNum is less than lengthOfTheArray', () => {
    const lengthOfTheArray = 10;
    const maxNum = 5;

    const result = rngService.generateArrayOfRandomNumbers(lengthOfTheArray, maxNum);

    expect(result.length).toBe(0);
  });
});
