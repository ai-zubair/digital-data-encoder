import { CustomElement } from '../CustomElement/CustomElement';
import { streamLengthFormContent } from './streamLengthFormContent';
import { AppEvents, AppAttributes, AppValidationMessages } from '../common/appConstants';
class StreamLengthForm extends CustomElement{

  private streamLength: number = 0;

  constructor() {
    super(streamLengthFormContent);
    this.bindEventListeners();
  }

  bindEventListeners = (): void => {
    const nextButton = this.shadowRoot?.getElementById("next-button");
    nextButton?.addEventListener("click",this.handleNextButtonClick);
  }

  handleNextButtonClick: EventListener = (event) =>{
    const streamLengthInput = this.shadowRoot?.querySelector("#length-input") as HTMLInputElement;
    const streamLength = parseInt(streamLengthInput.value,10);
    if(this.isStreamLengthValid(streamLength)){
      this.streamLength = streamLength;
      this.notifyValidStreamLength(streamLength);
    }else{
      this.notfiyInvalidStreamLength();
    }
  }

  notifyValidStreamLength = ( value: number) => {
    const streamLengthChangeEvent = new CustomEvent(AppEvents.StreamLengthChange,{
      detail: {
        [AppAttributes.DataStreamLength] : value
      }
    })
    this.parentElement?.dispatchEvent(streamLengthChangeEvent);
  }

  notfiyInvalidStreamLength = () => {
    const streamLengthErrorEvent = new CustomEvent(AppEvents.Notification,{
      detail:{
        [AppAttributes.NotificationText]: AppValidationMessages.StreamLengthError
      }
    });
    this.parentElement?.dispatchEvent(streamLengthErrorEvent);
  }

  isStreamLengthValid = (streamLength: number): boolean => {
    return streamLength >= 2 ? true : false;
  }
}

export { StreamLengthForm };