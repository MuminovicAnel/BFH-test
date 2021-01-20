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


  /**
   * Changes the label everytime the user type in the input field.
   * @param value Input text
   */
  public setLabelText = (value: string): void => {
    if (value === '') {
      this.changeText = 'write something in the input field to change this label';
    } else {
      const newValueValidator = (data: string) => pipeAll(
        this.isNumberInString,
        this.checkLength,
        this.isInteger
      )(value);

      if (newValueValidator(value)) {
        this.changeText = value;
      } else {
        this.changeText = 'write something in the input field to change this label';
      }
    }
  }

  /**
   * Validates the input text.
   * @param value Input text
   * @returns message
   */
  public validateInput = (value: string): string => {
    if (!this.checkLength(value) && !this.isNumberInString(value)) {
      return 'the inserted text is too short and it does not contain a 9';
    }
    if (!this.isInteger(value)) {
      return 'the inserted text is not an integer';
    }
    return 'validated';
  }

  /**
   * Checks if the input text is an integer.
   * @param value Input text
   */
  private isInteger = (value: string): boolean => {
    this.isIntegerText = Number.isInteger(+value);
    return Number.isInteger(+value);
  }

  /**
   * Checks if the lenght of the input texz is at least 3 characters long.
   * @param value Input text
   */
  private checkLength = (value: string): boolean => {
    if (value && value.length < 3) {
      this.isLongEnoughText = false;
      return false;
    }
    this.isLongEnoughText = true;
    return true;
  }

  /**
   * Checks if there is a 9 in the input text.
   * @param value Input text
   */
  private isNumberInString = (value: string): boolean => {
    this.isNumberInStringText = value.includes('9');
    return value.includes('9');
  }

}
