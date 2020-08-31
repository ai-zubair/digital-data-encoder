import { CustomElement } from '../CustomElement/CustomElement';
import { encoderScreenContent } from './encoderScreenContent';
import { AppEvents, AppAttributes, AppComponentName } from '../common/appConstants';

class EncoderScreen extends CustomElement{
  constructor() {
    super(encoderScreenContent);
    this.bindEventListeners();
  }

  bindEventListeners = (): void => {
    const backButton = this.shadowRoot?.querySelector("#back-button") as HTMLButtonElement;
    backButton.addEventListener("click", this.handleBackButtonClick);
  }

  handleBackButtonClick = (): void => {
    const activeComponentChangeEvent = new CustomEvent(AppEvents.ActiveComponentChange,{
      detail:{
        [AppAttributes.ComponentId]: AppComponentName.StreamBitForm
      }
    })
    this.parentElement?.dispatchEvent(activeComponentChangeEvent);
  }
}

export { EncoderScreen };