import { appWrapperContent } from "./appWrapperContent";
import { Events } from '../utils';
import { BreadCrumb } from '../BreadCrumb/constants';

class AppWrapper extends HTMLElement{

  private domContent: string = appWrapperContent;
  private activeComponentID: BreadCrumb = BreadCrumb.LandingBanner;
  private breadCrumb: Element | null = null;
  private componentMap: { [key: string]: Element } = {};

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
    this.addEventListener(Events.ActiveComponentChange,((event: CustomEvent)=>{
      const targetComponentID = event.detail.targetComponentID;
      this.setActiveComponent(targetComponentID)
    }) as EventListener)
  }

  connectedCallback() {
    this.createComponentMap();
  }

  createComponentMap = () => {
    const componentSlot = this.shadowRoot?.getElementById("component-slot") as HTMLSlotElement;
    const breadCrumbSlot = this.shadowRoot?.getElementById("bread-crumb-slot") as HTMLSlotElement;
    const appComponents = componentSlot.assignedElements({flatten: true});
    const breadCrumb = breadCrumbSlot.assignedElements({flatten: true});
    this.breadCrumb = breadCrumb[0];
    let componentIndex = 0;
    for (const componentID in BreadCrumb) {
      const currentComponent = appComponents[componentIndex];
      currentComponent.setAttribute("componentID",componentID);
      if(this.activeComponentID === componentID){
        currentComponent.setAttribute("active","true");
        this.breadCrumb.setAttribute("activeCrumb",componentID);
      }
      this.componentMap[componentID] = currentComponent;
      componentIndex++;
    }
    console.log(this.componentMap);
  }

  setActiveComponent = (componentID: BreadCrumb) => {
    const oldActiveComponent = this.componentMap[this.activeComponentID];
    oldActiveComponent.removeAttribute("active");
    const newActiveComponent = this.componentMap[componentID];
    newActiveComponent.setAttribute("active","true");
    this?.breadCrumb?.setAttribute("activeCrumb", componentID);
    this.activeComponentID = componentID;
  }
}

export { AppWrapper }