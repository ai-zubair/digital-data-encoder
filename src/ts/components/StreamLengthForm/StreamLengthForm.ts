import { CustomElement } from '../CustomElement/CustomElement';
import { streamLengthFormContent } from './streamLengthFormContent';
import { AppEvents, AppComponentName, AppAttributes, AppValidationMessages } from '../common/appConstants';
class StreamLengthForm extends CustomElement{
  constructor() {
    super(streamLengthFormContent);
    this.bindEventListeners();
  }

  bindEventListeners = (): void => {
    const nextButton = this.shadowRoot?.getElementById("next-button");
    nextButton?.addEventListener("click",()=>{
      if(this.isStreamLengthValid()){
        const activeChildChangeEvent = new CustomEvent(AppEvents.ActiveComponentChange,{
          detail:{
            [AppAttributes.ComponentId]: AppComponentName.StreamBitForm
          }
        })
        this.parentElement?.dispatchEvent(activeChildChangeEvent);
      }else{
        const streamLengthErrorEvent = new CustomEvent(AppEvents.ErrorNotification,{
          detail:{
            [AppAttributes.ErrorMessage]: [AppValidationMessages.StreamLengthError]
          }
        });
        this.parentElement?.dispatchEvent(streamLengthErrorEvent);
      }
    })
  }

  isStreamLengthValid = (): boolean => {
    const lengthInput = this.shadowRoot?.getElementById("length-input") as HTMLInputElement;
    return parseInt(lengthInput.value) >= 2 ? true : false;
  }
}

export { StreamLengthForm };