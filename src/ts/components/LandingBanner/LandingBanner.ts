import { landingBannerContent } from "./landingBannerContent";
import { getRandomBit, Events } from "../utils";
import { BreadCrumb } from "../BreadCrumb/constants";

class LandingBanner extends HTMLElement{

  private domContent: string = landingBannerContent;
  private textDecrypted: boolean = false;
  public isHidden: boolean = false;

  constructor(){
    super();
    this.bindDomContent();
    this.bindListeners();
    
  }

  bindDomContent = ():void => {
    const contentTemplate = document.createElement("template");
    contentTemplate.innerHTML = this.domContent;
    const shadowRoot = this.attachShadow({mode: "open"});
    shadowRoot.appendChild(contentTemplate.content.cloneNode(true));
  }

  bindListeners = (): void => {
    const nextButton = this.shadowRoot?.querySelector(".button-text") as HTMLButtonElement;
    nextButton.addEventListener("click",()=>{
      const activeChildChangeEvent = new CustomEvent(Events.ActiveComponentChange,{
        detail:{
          targetComponentID: BreadCrumb.StreamLengthForm
        }
      })
      this.parentElement?.dispatchEvent(activeChildChangeEvent);
    })

  }

  connectedCallback():void{
    this.render();
  }

  showDecryptingText = ():void =>{
    const shadowRoot = this.shadowRoot as ShadowRoot;
    const bannerWords = shadowRoot?.querySelectorAll(".landing-text-word");
    
    const decryptedWords = ["DIGITAL","DATA","ENCODER"];
    const stringToDecrpytTo = decryptedWords.join("");
    const totalStringLength = stringToDecrpytTo.length;

    let decryptedLength = 0;
    let framesElapsed = 0;
    let animationFrameID: number;

    const decryptingText = (): void=>{
      framesElapsed++;
      const decryptCharacterInThisFrame = (framesElapsed % 4 === 0) ? true : false;
      if( decryptedLength >= totalStringLength ){
        this.textDecrypted = true;
        cancelAnimationFrame(animationFrameID);
      }else{
        if(decryptCharacterInThisFrame){
          const decryptedCharacterIndex = decryptedLength;
          const decryptedString = stringToDecrpytTo.substring(0, decryptedCharacterIndex+1);
          decryptedLength++;
          const encryptedString = getRandomBit(totalStringLength - decryptedLength);
          const newTargetString = decryptedString + encryptedString;
          bannerWords.forEach( (bannerWord, wordIndex) => {
            const bannerWordStartIndex = stringToDecrpytTo.indexOf(decryptedWords[wordIndex]);
            const bannerWordEndIndex = bannerWordStartIndex + decryptedWords[wordIndex].length;
            bannerWord.innerHTML = newTargetString.substring(bannerWordStartIndex,bannerWordEndIndex);
          })
        }
        animationFrameID = requestAnimationFrame(decryptingText);
      }
    }
    decryptingText();
  }
  
  drawSignaLikeBorders = (): void => {
    const shadowRoot = this.shadowRoot as ShadowRoot;
    const bannerWords = shadowRoot?.querySelectorAll(".landing-text-word");
    requestAnimationFrame(()=>{
      for (let wordIndex = 0; wordIndex < bannerWords.length; wordIndex++) {
        bannerWords[wordIndex].classList.add("draw-borders");
      }
    })
  }

  showNextButton = () => {
    if(!this.textDecrypted) {
      requestAnimationFrame(this.showNextButton);
    }else{
      const nextButton = this.shadowRoot?.getElementById("next-button") as HTMLButtonElement;
      nextButton.classList.add("pop-out");
    }
  }

  render = (): void => {
    this.showDecryptingText();
    this.drawSignaLikeBorders();
    this.showNextButton();
  }

}

export { LandingBanner }