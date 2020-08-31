import { CustomElement } from '../CustomElement/CustomElement';
import { streamBitFormContent } from './streamBitFormContent';
import { AppAttributes, AppEvents, AppComponentName } from '../common/appConstants';
import { FancyInputListAttributes } from '../FancyInputList/FancyInputList';
class StreamBitForm extends CustomElement{

  static get observedAttributes():string []{
    return [AppAttributes.DataStreamLength];
  }

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
    const inputList = this.shadowRoot?.querySelector("#input-list");
    const dataStreamBits: string[] = JSON.parse(inputList?.getAttribute(FancyInputListAttributes.LIST_VALUES) as string) ;
    const inputListLength = parseInt(inputList?.getAttribute(FancyInputListAttributes.LIST_LENGTH) as string);
    const dataStreamLength = dataStreamBits.length;
    if(inputListLength !== dataStreamLength){
      this.notifyInvalidBitStream();
      return;
    }
    for (let bitIndex = 0; bitIndex < inputListLength; bitIndex++) {
      if(dataStreamBits[bitIndex] === null){
        this.notifyInvalidBitStream();
        return;
      }
    }
    this.notifyValidBitStream(dataStreamBits);

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

  notifyInvalidBitStream = (): void =>{
    const invalidBitStreamEvent = new CustomEvent(AppEvents.Notification,{
      detail:{
        [AppAttributes.NotificationText]: "One or more data stream bits are missing!"
      }
    })
    this.parentElement?.dispatchEvent(invalidBitStreamEvent);
  }

  notifyValidBitStream = (dataStreamBits: string[]): void => {
    const validBitStreamEvent = new CustomEvent(AppEvents.DataStreamChange,{
      detail:{
        [AppAttributes.DataBitStream]: dataStreamBits
      }
    })
    this.parentElement?.dispatchEvent(validBitStreamEvent);
  }

  connectedCallback(){

  }

  attributeChangedCallback(attr: string, oldVal: string, newVal: string): void{
    const inputList = this.shadowRoot?.querySelector("#input-list");
    inputList?.setAttribute(FancyInputListAttributes.LIST_LENGTH,newVal);
  }
}

export { StreamBitForm };