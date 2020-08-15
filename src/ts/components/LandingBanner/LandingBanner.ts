import { landingBannerContent } from "./landingBannerContent";

class LandingBanner extends HTMLElement{

  private domContent: string = landingBannerContent; 

  constructor(){
    super();
    this.bindDomContent();
  }

  bindDomContent = ():void => {
    const contentTemplate = document.createElement("template");
    contentTemplate.innerHTML = this.domContent;
    const shadowRoot = this.attachShadow({mode: "open"});
    shadowRoot.appendChild(contentTemplate.content.cloneNode(true));
  }

  connectedCallback():void{
    this.render();
  }

  showDecryptingText = ():void =>{
    const shadowRoot = this.shadowRoot as ShadowRoot;
    const bannerWords = shadowRoot?.querySelectorAll(".landing-text-word");
    
    const decryptedWords = ["DIGITAL","DATA","ENCODER"]
    const stringToDecrpytTo = decryptedWords.join("");
    const totalStringLength = stringToDecrpytTo.length

    let decryptedLength = 0;
    let frames = 0;

    const decryptingText = (): void=>{
      frames++;
      const decryptCharacterInThisFrame = (frames % 5 === 0) ? true : false;
      if(decryptedLength < totalStringLength && decryptCharacterInThisFrame){
        
        const decryptedCharacterIndex = decryptedLength;
        const decryptedString = stringToDecrpytTo.substring(0, decryptedCharacterIndex+1);
        
        decryptedLength++;
        
        const encryptedString = this.getRandomBit(totalStringLength - decryptedLength);
        const newTargetString = decryptedString + encryptedString;

        bannerWords.forEach( (bannerWord, wordIndex) => {
          const bannerWordStartIndex = stringToDecrpytTo.indexOf(decryptedWords[wordIndex]);
          const bannerWordEndIndex = bannerWordStartIndex + decryptedWords[wordIndex].length;
          bannerWord.innerHTML = newTargetString.substring(bannerWordStartIndex,bannerWordEndIndex);
        })
      }
      requestAnimationFrame(decryptingText);
    }

    const animationID = requestAnimationFrame(decryptingText);
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

  getRandomBit = ( stringLength: number ): string => {
    let randomString = ""
    for (let length = 0; length < stringLength; length++) {
      const randomBit = Math.floor(Math.random()*2);
      randomString+=randomBit;
    }
    return randomString;
  }

  render = (): void => {
    this.showDecryptingText();
    this.drawSignaLikeBorders();
  }

}

export { LandingBanner }