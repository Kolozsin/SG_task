import { Injectable } from '@angular/core';
import { RandomNumberGeneratorService } from 'src/app/Service/rngService/random-number-generator.service';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberGeneratorServiceImpl implements RandomNumberGeneratorService{

  constructor() { 

  }  
  
  /**
   * 
   * @param lengthOfTheArray The length of the array we would like to generate
   * @param maxNum The maximum value-1 that is still within the range we want to generate
   * @returns Array with randomliy generated numbers with the length of the @lengthOfTheArray
   */
  generateArrayOfRandomNumbers(lengthOfTheArray: number, maxNum : number): number[] {
    let createdArray : number[] = [];

    if(maxNum < lengthOfTheArray)
      return createdArray;    

    while(createdArray.length != lengthOfTheArray){
      let random = Math.floor(Math.random() * maxNum) + 1;
      if(createdArray.find(element => element === random) == null){
        createdArray.push(random);
      }
    }

    return createdArray;
  }
}
