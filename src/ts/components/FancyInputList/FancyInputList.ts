import { CustomElement } from '../CustomElement/CustomElement';
import { fancyInputListContent } from './fancyInputListContent';
import { AppAttributes } from '../common/appConstants';

export enum FancyInputListAttributes{
  LIST_LENGTH = "list-length",
  TYPE = "type",
  INPUT_INDEX = "input-index",
  DISABLED = "disabled",
  AUTOFOCUS = "autofocus",
  VALID_VALUES = "valid-values",
  LIST_VALUES = "list-values"

}

enum KeyCodes{
  BACKSPACE = "Backspace"
}

interface ShadowDomEvent extends Event, KeyboardEvent{
  path: HTMLElement[]
}

class FancyInputList extends CustomElement{
  private inputListLength: number = 0;
  private inputListValues: string[] | null[]  = [];

  constructor() {
    super(fancyInputListContent);
    this.addInputsToTheList();
    this.bindChangeListeners();
  }

  static get observedAttributes(){
    return [AppAttributes.InputListLength];
  }

  addInputsToTheList = ():void => {
    const inputsContainer = this.shadowRoot?.querySelector("#inputs-wrapper") as HTMLDivElement;
    inputsContainer.innerHTML = "";
    const inputListLength = parseInt(this.getAttribute(FancyInputListAttributes.LIST_LENGTH) as string, 10);
    const inputType = this.getAttribute(FancyInputListAttributes.TYPE) || "number";
    this.inputListLength = inputListLength;
    for (let listInputIndex = 0; listInputIndex < inputListLength; listInputIndex++) {
      const listInput = document.createElement("input");
      listInputIndex === 0 ? listInput.setAttribute(FancyInputListAttributes.AUTOFOCUS,"true") : listInput.setAttribute(FancyInputListAttributes.DISABLED,"true");
      listInput.setAttribute(FancyInputListAttributes.INPUT_INDEX,`${listInputIndex}`);
      listInput.setAttribute(FancyInputListAttributes.TYPE,`${inputType}`);
      listInput.classList.add("list-inputs");
      inputsContainer.appendChild(listInput);
    }
  }

  bindChangeListeners = ():void => {
    const inputsContainer = this.shadowRoot?.querySelector("#inputs-wrapper") as HTMLDivElement;
    inputsContainer.addEventListener("input",this.handleInputValueChange as EventListener);
    inputsContainer.addEventListener("keydown",this.handleBackSpacePress as EventListener);
  }

  handleInputValueChange = (event: ShadowDomEvent ): void=>{
    const currentInput = event.path[0] as HTMLInputElement;
    const inputValue = currentInput.value;
    if(this.isValidInputValue(inputValue)){
      this.upadteInputListValue(currentInput, inputValue);
      const nextInput = currentInput.nextElementSibling;
      if(nextInput !== null){
        nextInput.removeAttribute(FancyInputListAttributes.DISABLED);
        (nextInput as HTMLInputElement).focus();
      }
    }else{
      currentInput.value = "";
    }
  }

  handleBackSpacePress = (event: ShadowDomEvent): void => {
    const pressedKey = event.key;
    const currentInput = event.path[0] as HTMLInputElement;
    const inputValue = currentInput.value;
    if(pressedKey === KeyCodes.BACKSPACE && inputValue.length === 0){
      this.upadteInputListValue(currentInput, null);
      const prevInput = currentInput.previousElementSibling;
      if(prevInput !== null){
        currentInput.setAttribute(FancyInputListAttributes.DISABLED,"true");
        (prevInput as HTMLInputElement).focus();
      }
    }
  }

  upadteInputListValue = (listInput: HTMLInputElement, inputValue: string | null):void => {
    const currentInputIndex = parseInt(listInput.getAttribute(FancyInputListAttributes.INPUT_INDEX) as string, 10);
    this.inputListValues[currentInputIndex] = inputValue;
    this.setAttribute(FancyInputListAttributes.LIST_VALUES,JSON.stringify(this.inputListValues));
  }

  isValidInputValue = ( value: string ):boolean =>{
    const validValues = this.getAttribute(FancyInputListAttributes.VALID_VALUES)?.split(":");
    if(validValues){
      return validValues.indexOf(value) >= 0;
    }
    return true;
  }

  attributeChangedCallback(attr: string, oldVal: string, newVal: string): void{
    if(oldVal !== null){
      this.addInputsToTheList();
    }
  }

}

export { FancyInputList }