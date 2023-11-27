import { Component } from '@angular/core';

@Component({
  selector: 'app-task6',
  templateUrl: './task6.component.html',
  styleUrls: ['./task6.component.css']
})
export class Task6Component {
  userName: string = 'Eman Mohsen ';
  processInput(inputValue: string): void {

    console.log('Input value:', inputValue);

  }
 /*videoId = 'https://www.youtube.com/watch?v=zsia54kAOF8';*/

  isButtonActive: boolean=false;
  color: string = '#FF0000';

  
  updateColor(newColor: string) {
    this.color = newColor;
  }
  resetColor() {
    this.color = '#FF0000';
}


}
