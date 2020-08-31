import { CustomElement } from '../CustomElement/CustomElement';
import { encoderScreenContent } from './encoderScreenContent';

class EncoderScreen extends CustomElement{
  constructor() {
    super(encoderScreenContent);
  }
}

export { EncoderScreen };