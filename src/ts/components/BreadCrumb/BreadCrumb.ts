import { breadCrumbContent } from './breadCrumbContent';

class BreadCrumb extends HTMLElement{

  private domContent: string = breadCrumbContent;

  constructor() {
    super();
    this.bindDomContent();
  }

  bindDomContent = () => {
    const contentTemplate = document.createElement("template");
    contentTemplate.innerHTML = this.domContent;
    const shadowRoot = this.attachShadow({mode: "open"});
    shadowRoot.appendChild(contentTemplate.content.cloneNode(true));
  }

}

export { BreadCrumb };