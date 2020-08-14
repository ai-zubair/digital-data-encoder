import { landingBannerContent } from "./landingBannerContent";

class LandingBanner extends HTMLElement{

  private domContent: string = landingBannerContent; 

  constructor(){
    super();
    this.bindDomContent();
  }

  bindDomContent = () => {
    const contentTemplate = document.createElement("template");
    contentTemplate.innerHTML = this.domContent;
    const shadowRoot = this.attachShadow({mode: "open"});
    shadowRoot.appendChild(contentTemplate.content.cloneNode(true));
  }

  connectedCallback(){
    this.showDecryptingText();
    this.drawSignaLikeBorders();
  }

  showDecryptingText = () =>{

  }
  
  drawSignaLikeBorders = () => {
    const shadowRoot = this.shadowRoot as ShadowRoot;
    const bannerWords = shadowRoot?.querySelectorAll(".landing-text-word");
    requestAnimationFrame(()=>{
      for (let i = 0; i < bannerWords.length; i++) {
        bannerWords[i].classList.add("draw-borders");
      }
    })
  }

}

export { LandingBanner }