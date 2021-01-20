import {
  AppComponent
} from '../app.component';
import {
  pipeAll
} from './pipe.function';

describe('Test the pipe function', () => {
  let app: AppComponent;

  beforeEach(() => {
    app = new AppComponent();
  });

  it('should return an error the inserted text is not an integer', () => {
    const inputText = 'test';
    const message = (data: string) => pipeAll(
      app.validateInput
    )(inputText);
    expect(message(inputText)).toEqual('the inserted text is not an integer');
  });

  it('should return validated', () => {
    const inputText = '109';
    const message = (data: string) => pipeAll(
      app.validateInput
    )(inputText);
    expect(message(inputText)).toEqual('validated');
  });

  it('should return an error the inserted text is too short and does not contain a 9', () => {
    const inputText = '11';
    const message = (data: string) => pipeAll(
      app.validateInput
    )(inputText);
    expect(message(inputText)).toEqual('the inserted text is too short and it does not contain a 9');
  });

});
