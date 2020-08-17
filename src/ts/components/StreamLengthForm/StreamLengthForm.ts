import { CustomElement } from '../CustomElement/CustomElement';
import { streamLengthFormContent } from './streamLengthFormContent';
class StreamLengthForm extends CustomElement{
  constructor() {
    super(streamLengthFormContent);
  }
}

export { StreamLengthForm };