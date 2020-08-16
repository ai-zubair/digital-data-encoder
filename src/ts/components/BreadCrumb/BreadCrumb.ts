import { breadCrumbContent } from './breadCrumbContent';

class BreadCrumb extends HTMLElement{

  private domContent: string = breadCrumbContent;

  constructor() {
    super();
    this.bindDomContent();
  }

  static get observedAttributes(): string[]{
    return ["activecrumb"];
  }

  bindDomContent = () => {
    const contentTemplate = document.createElement("template");
    contentTemplate.innerHTML = this.domContent;
    const shadowRoot = this.attachShadow({mode: "open"});
    shadowRoot.appendChild(contentTemplate.content.cloneNode(true));
  }

  attributeChangedCallback(attr: string, oldVal: string, newVal: string){
    if(oldVal!==newVal){
      const oldCrumb = this.shadowRoot?.getElementById(oldVal);
      const newCrumb = this.shadowRoot?.getElementById(newVal);
      oldCrumb?.removeAttribute("active")
      newCrumb?.setAttribute("active","true");
    }
  }

}

export { BreadCrumb };