import { CustomElement } from '../CustomElement/CustomElement';
import { streamLengthFormContent } from './streamLengthFormContent';
import { AppEvents, AppComponentName, AppAttributes } from '../common/appConstants';
class StreamLengthForm extends CustomElement{
  constructor() {
    super(streamLengthFormContent);
    this.bindEventListeners();
  }

  bindEventListeners = () => {
    const nextButton = this.shadowRoot?.getElementById("next-button");
    nextButton?.addEventListener("click",()=>{
      const activeChildChangeEvent = new CustomEvent(AppEvents.ActiveComponentChange,{
        detail:{
          [AppAttributes.ComponentId]: AppComponentName.StreamBitForm
        }
      })
      this.parentElement?.dispatchEvent(activeChildChangeEvent);
    })
  }
}

export { StreamLengthForm };