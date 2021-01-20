import {
  Component
} from '@angular/core';
import {
  pipeAll
} from './utils/pipe.function';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  public displayErrors: string[] = [];
  public changeText = 'write something in the input field to change this label';
  public inputText = '';
  public isNumberInStringText = false;
  public isLongEnoughText = false;
  public isIntegerText = false;


  public setLabelText = (value: string): void => {
    if (value === '') {
      this.changeText = 'write something in the input field to change this label';
    } else {
      const newValueValidator = (data: string) => pipeAll(
        this.isNumberInString,
        this.checkLength,
        this.isInteger
      )(value);
      console.log(newValueValidator(value));
      if (newValueValidator(value)) {
        this.changeText = value;
      } else {
        this.changeText = 'write something in the input field to change this label';
      }
    }
  }

  public validateInput = (value: string): string => {
    if (!this.checkLength(value) && !this.isNumberInString(value)) {
      return 'the inserted text is too short and it does not contain a 9';
    }
    if (!this.isInteger(value)) {
      return 'the inserted text is not an integer';
    }
    return 'validated';
  }

  private isInteger = (value: string): boolean => {
    this.isIntegerText = Number.isInteger(+value);
    return Number.isInteger(+value);
  }

  private checkLength = (value: string): boolean => {
    if (value && value.length < 3) {
      this.isLongEnoughText = false;
      return false;
    }
    console.log(this.isLongEnoughText);
    this.isLongEnoughText = true;
    return true;
  }

  private isNumberInString = (value: string): boolean => {
    this.isNumberInStringText = value.includes('9');
    return value.includes('9');
  }

}
