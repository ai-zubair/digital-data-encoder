import { CustomElement } from '../CustomElement/CustomElement';
import { appWrapperContent } from "./appWrapperContent";
import { AppComponentName, AppEvents, AppAttributes } from '../common/appConstants';

class AppWrapper extends CustomElement{

  private activeComponentID: AppComponentName = AppComponentName.LandingBanner;
  private breadCrumb: Element | null = null;
  private componentMap: { [key: string]: Element } = {};

  constructor() {
    super(appWrapperContent);
    this.bindListeners();
  }

  bindListeners = (): void => {
    this.addEventListener(AppEvents.ActiveComponentChange,((event: CustomEvent)=>{
      const targetComponentID = event.detail.targetComponentID;
      this.setActiveComponent(targetComponentID);
    }) as EventListener)
  }

  connectedCallback() {
    this.createComponentMap();
  }

  createComponentMap = () => {
    const componentSlot = this.shadowRoot?.getElementById("component-slot") as HTMLSlotElement;
    const breadCrumbSlot = this.shadowRoot?.getElementById("bread-crumb-slot") as HTMLSlotElement;
    const appComponents = componentSlot.assignedElements({flatten: true});
    this.breadCrumb = breadCrumbSlot.assignedElements({flatten: true})[0];
    let componentIndex = 0;
    
    for (const componentID in AppComponentName) {
      const currentComponent = appComponents[componentIndex];
      currentComponent.setAttribute(AppAttributes.ComponentId,componentID);
      if(this.activeComponentID === componentID){
        currentComponent.setAttribute("active","true");
        this.breadCrumb.setAttribute(AppAttributes.ActiveCrumb,componentID);
      }
      this.componentMap[componentID] = currentComponent;
      componentIndex++;
    }

  }

  setActiveComponent = (componentID: AppComponentName) => {
    const oldActiveComponent = this.componentMap[this.activeComponentID];
    oldActiveComponent.removeAttribute("active");
    const newActiveComponent = this.componentMap[componentID];
    newActiveComponent.setAttribute("active","true");
    this?.breadCrumb?.setAttribute(AppAttributes.ActiveCrumb, componentID);
    this.activeComponentID = componentID;
  }
}

export { AppWrapper }