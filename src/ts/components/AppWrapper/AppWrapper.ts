import { appWrapperContent } from "./appWrapperContent";
import { Events } from '../utils';

class AppWrapper extends HTMLElement{

  private domContent: string = appWrapperContent;

  constructor() {
    super();
    this.bindDomContent();
    this.bindListeners();
  }

  bindDomContent = (): void => {
    const contentTemplate = document.createElement("template");
    contentTemplate.innerHTML = this.domContent;
    const shadowRoot = this.attachShadow({mode: "open"});
    shadowRoot.appendChild(contentTemplate.content.cloneNode(true));
  }

  bindListeners = (): void => {
    this.addEventListener(Events.ActiveChildChange,((event: CustomEvent)=>{
      const eventSource: HTMLElement = event.detail.sourceElement;
      eventSource.setAttribute("isHidden","true");
    }) as EventListener)
  }

  connectedCallback() {

  }

}

export { AppWrapper }