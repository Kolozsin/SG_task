import { Component } from '@angular/core';
import { TicketComponent } from '../ticket/ticket.component';

export const NUMBER_OF_TICKETS = 4;
export const NUMBER_TO_SELECT = 6;
export const ROWNUMBER = 7;
export const COLNUMBER = 7;


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  tickets: number[] | undefined;
  selectedNumbersOnTickets: number[][] = [];
  results: string[] = [];


  constructor() {
    this.tickets = Array.from(Array(NUMBER_OF_TICKETS).keys())
    for (var i: number = 0; i < this.tickets.length; i++) {
      this.selectedNumbersOnTickets[i] = [];
    }
  }

  handleOnChangedSelectedNumbers(eventData: { index: number; arrayValue: number[] }) {
    if(eventData.index != null && eventData.index < NUMBER_OF_TICKETS){
      this.selectedNumbersOnTickets[eventData.index] = eventData.arrayValue;
    }
  }


  playGame = () => {
    this.tickets?.forEach((ticket) => {
      this.results[ticket] = "Panel " + (ticket + 1) + ":";
      if (this.selectedNumbersOnTickets[ticket].length === NUMBER_TO_SELECT) {
        this.selectedNumbersOnTickets[ticket].sort((a, b) => a - b).forEach((selectedNumber) => {
          this.results[ticket] += "\t" + (selectedNumber + 1) + ",";
        })
        this.results[ticket] = this.results[ticket].substring(0, this.results[ticket].length - 1);
      }
      else {
        if (this.selectedNumbersOnTickets[ticket].length === 0) {
          this.results[ticket] += "\t Empty";
        }
        else if (NUMBER_TO_SELECT > this.selectedNumbersOnTickets[ticket].length) {
          this.results[ticket] += "Error:\t" + (NUMBER_TO_SELECT - this.selectedNumbersOnTickets[ticket].length) + "\t mark(s) is missing";
        }
        else if (NUMBER_TO_SELECT < this.selectedNumbersOnTickets[ticket].length) {
          this.results[ticket] += "Error: Please remove\t" + (this.selectedNumbersOnTickets[ticket].length - NUMBER_TO_SELECT) + "\t mark(s)";
        }
      }
    })
  };
}
