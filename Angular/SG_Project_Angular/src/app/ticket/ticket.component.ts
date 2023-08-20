import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { RandomNumberGeneratorService } from '../Service/rngService/random-number-generator.service';
import { COLNUMBER, ROWNUMBER } from '../game/game.component';



@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],

})
export class TicketComponent {
  @Input() ticketIndex!: number;  

  @Output() onChangedSelectedNumbers = new EventEmitter<{ index: number; arrayValue: number[] }>();

  selectableNumbers: boolean[][] = [];
  selectedNumbers: number[] = [];

  colSpanRandom: number = 1;
  colSpanDelete: number = 1;
  constructor(
    @Inject('RandomGeneratorService') private randomGeneratorService: RandomNumberGeneratorService) {
    this.resetTicket();
    this.colSpanRandom = Math.floor(COLNUMBER/2);
    this.colSpanDelete = Math.ceil(COLNUMBER/2);
  }



  resetTicket = () => {
    for (var i: number = 0; i < ROWNUMBER; i++) {
      this.selectableNumbers[i] = [];
      for (var j: number = 0; j < COLNUMBER; j++) {
        this.selectableNumbers[i][j] = false;
      }
    }
    this.selectedNumbers = [];
    this.sendRefreshToGameComponent();
  }

  selected = (rowIndex: number, colIndex: number) => {
    let selectedElement = ((rowIndex)*(7)+colIndex);
    if(this.selectableNumbers[rowIndex][colIndex]){
      //Deselect
      let index = this.selectedNumbers.indexOf(selectedElement);
      if(index > -1 ){
        this.selectedNumbers.splice(index,1);
        this.selectableNumbers[rowIndex][colIndex] = false;
      } 
    }
    else{
      //Select
      this.selectableNumbers[rowIndex][colIndex] = true;
      this.selectedNumbers.push(selectedElement);
    }
    this.sendRefreshToGameComponent();
  }

  randomGenerate = () => {
    this.resetTicket();
    this.selectedNumbers = this.randomGeneratorService.generateArrayOfRandomNumbers(6,48);
    this.selectedNumbers.forEach((number) => {
      let numberIndexRow = Math.floor(number / ROWNUMBER);
      let numberIndexColumn = number - numberIndexRow * ROWNUMBER;
      this.selectableNumbers[numberIndexRow][numberIndexColumn] = true;
    })
    this.sendRefreshToGameComponent();
  }

  private sendRefreshToGameComponent = () => {
    this.onChangedSelectedNumbers.emit({index : this.ticketIndex, arrayValue: this.selectedNumbers});
  }

}


