import { CustomElement } from '../CustomElement/CustomElement';
import { streamBitFormContent } from './streamBitFormContent';
import { AppAttributes, AppEvents, AppComponentName } from '../common/appConstants';
import { FancyInputListAttributes } from '../FancyInputList/FancyInputList';
class StreamBitForm extends CustomElement{

  constructor() {
    super(streamBitFormContent);
    this.bindListeners();
  }

  bindListeners = (): void => {
    const nextButton = this.shadowRoot?.querySelector("#next-button");
    const prevButton = this.shadowRoot?.querySelector("#prev-button");

    prevButton?.addEventListener("click", this.handlePrevButtonClick);
    nextButton?.addEventListener("click", this.handleNextButtonClick);
  }

  handleNextButtonClick: EventListener = (event) => {
    
  }

  handlePrevButtonClick: EventListener = (event) => {
    const activeComponentChangeEvent = new CustomEvent(AppEvents.ActiveComponentChange,{
      bubbles: true,
      detail:{
        [AppAttributes.ComponentId]: AppComponentName.StreamLengthForm
      }
    })
    this.parentElement?.dispatchEvent(activeComponentChangeEvent);
  }

  static get observedAttributes():string []{
    return [AppAttributes.DataStreamLength];
  }

  connectedCallback(){

  }

  attributeChangedCallback(attr: string, oldVal: string, newVal: string): void{
    const inputList = this.shadowRoot?.querySelector("#input-list");
    inputList?.setAttribute(FancyInputListAttributes.LIST_LENGTH,newVal);
  }
}

export { StreamBitForm };