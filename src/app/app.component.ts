import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  changeText: string = "write something in the input field to change this label";
  inputText: string = "";


  setLabelText(value: string) {
    this.changeText = value;
  }
}
