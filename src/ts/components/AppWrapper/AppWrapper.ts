import { CustomElement } from '../CustomElement/CustomElement';
import { appWrapperContent } from "./appWrapperContent";
import { AppComponentName, AppEvents, AppAttributes } from '../common/appConstants';

class AppWrapper extends CustomElement{

  private activeComponentID: AppComponentName = AppComponentName.LandingBanner;
  private breadCrumb: Element | null = null;
  private componentMap: { [key: string]: Element } = {};

  constructor() {
    super(appWrapperContent);
    this.bindAppEventHandlers();
    this.bindOwnEventListeners();
  }

  bindAppEventHandlers = (): void => {
    this.addEventListener(AppEvents.ActiveComponentChange,this.handleActiveComponentChange as EventListener);
    this.addEventListener(AppEvents.LandingBannerShown,this.handleLandingBannerShown as EventListener);
    this.addEventListener(AppEvents.Notification,this.handleNotificationEvent as EventListener);
    this.addEventListener(AppEvents.StreamLengthChange,this.handleStreamLengthChange as EventListener)
    this.addEventListener(AppEvents.DataStreamChange,this.handleDataStreamChange as EventListener)
  }

  handleActiveComponentChange = (event: CustomEvent): void => {
    const targetComponentID = event.detail[AppAttributes.ComponentId];
    this.setActiveComponent(targetComponentID);
  }
  
  handleLandingBannerShown = (event: Event): void => {
    this?.breadCrumb?.removeAttribute("isHidden");
    this?.breadCrumb?.setAttribute(AppAttributes.ActiveCrumb,this.activeComponentID);
  }

  handleNotificationEvent = (event: CustomEvent) => {
    const errorMessage = event.detail[AppAttributes.NotificationText];
    this.showNotification(errorMessage);
  }

  handleStreamLengthChange = (event: CustomEvent): void => {
    const dataStreamLength = event.detail[AppAttributes.DataStreamLength];
    const streamBitForm = this.componentMap[AppComponentName.StreamBitForm];
    const encoderScreen = this.componentMap[AppComponentName.EncoderScreen];
    streamBitForm.setAttribute(AppAttributes.DataStreamLength,dataStreamLength);
    encoderScreen.setAttribute(AppAttributes.DataStreamLength,dataStreamLength);
    this.setActiveComponent(AppComponentName.StreamBitForm);
  }

  handleDataStreamChange = (event: CustomEvent): void => {
    const dataStream: string[] = event.detail[AppAttributes.DataBitStream];
    const encoderScreen = this.componentMap[AppComponentName.EncoderScreen];
    encoderScreen.setAttribute(AppAttributes.DataBitStream,JSON.stringify(dataStream));
    this.setActiveComponent(AppComponentName.EncoderScreen);
  }

  bindOwnEventListeners = () => {
    const notificationCloseButton = this.shadowRoot?.querySelector(".notification-timer") as HTMLSpanElement;
    notificationCloseButton.addEventListener("click",this.handleNotificationClose as EventListener);
  }

  handleNotificationClose = (event: Event) => {
    const notification = this.shadowRoot?.getElementById("notification") as HTMLDivElement;
    const progressBar = notification.querySelector(".progress-bar") as HTMLSpanElement;
    progressBar.classList.remove("animate");
    notification.classList.remove("show");
  }
  
  connectedCallback(): void {
    this.createComponentMap();
  }

  createComponentMap = (): void => {
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
      }
      this.componentMap[componentID] = currentComponent;
      componentIndex++;
    }

  }

  setActiveComponent = (componentID: AppComponentName): void => {
    const oldActiveComponent = this.componentMap[this.activeComponentID];
    oldActiveComponent.removeAttribute("active");
    const newActiveComponent = this.componentMap[componentID];
    newActiveComponent.setAttribute("active","true");
    this?.breadCrumb?.setAttribute(AppAttributes.ActiveCrumb, componentID);
    this.activeComponentID = componentID;
  }

  showNotification = (notificationText: string): void => {
    const notification = this.shadowRoot?.getElementById("notification") as HTMLDivElement;
    const notificationTextContainer = notification.querySelector(".notification-text") as HTMLParagraphElement;
    const progressBar = notification.querySelector(".progress-bar") as HTMLSpanElement;
    notificationTextContainer.innerText = notificationText;
    let offset = 0;
    const notificationPersistor = ( timestamp: DOMHighResTimeStamp ): void =>{
      
      if(offset === 0){
        notification.classList.add("show");
        progressBar.classList.add("animate");
        offset = timestamp;
      }
      if(timestamp-offset >= 2000){
        progressBar.classList.remove("animate");
        notification.classList.remove("show");
      }else{
        requestAnimationFrame(notificationPersistor);
      }
    }
    requestAnimationFrame(notificationPersistor);
  }
}

export { AppWrapper }