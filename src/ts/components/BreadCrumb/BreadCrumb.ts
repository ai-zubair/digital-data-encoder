import { CustomElement } from '../CustomElement/CustomElement';
import { breadCrumbContent } from './breadCrumbContent';
import { AppAttributes } from '../common/appConstants';

class BreadCrumb extends CustomElement{

  constructor() {
    super(breadCrumbContent);
  }

  static get observedAttributes(): string[]{
    return [AppAttributes.ActiveCrumb];
  }

  attributeChangedCallback(attr: string, oldVal: string, newVal: string): void{
    if(oldVal!==newVal){
      const oldCrumb = this.shadowRoot?.getElementById(oldVal);
      const newCrumb = this.shadowRoot?.getElementById(newVal);
      oldCrumb?.removeAttribute("active")
      newCrumb?.setAttribute("active","true");
    }
  }

}

export { BreadCrumb };