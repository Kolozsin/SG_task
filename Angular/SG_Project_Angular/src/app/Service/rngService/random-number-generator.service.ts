
/**
  * Create a randomly generated number array based on the parameters.
  * @param lengthOfTheArray The length of the array we would like to generate
  * @param maxNum The maximum value-1 that is still within the range we want to generate
  * @returns Array with randomliy generated numbers with the length of the @lengthOfTheArray
  */
export interface RandomNumberGeneratorService {

    generateArrayOfRandomNumbers(lengthOfTheArray: number, maxNum: number): number[];
}