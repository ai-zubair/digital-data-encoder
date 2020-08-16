//@ts-ignore
import breadCrumbStyles from 'bundle-text:./breadCrumb.scss';
import { AppComponentName } from "../common/appConstants";
import { BreadCrumbItems } from './contentMap';

const { 
  [AppComponentName.LandingBanner]: landingBanner,
  [AppComponentName.StreamLengthForm]: streamLengthForm,
  [AppComponentName.StreamBitForm]: streamBitForm,
  [AppComponentName.EncoderScreen]: encoderScreen,
}= BreadCrumbItems;

const breadCrumbContent = `
  <style>
    ${breadCrumbStyles}
  </style>
  <div class="crumb-wrapper">
    <div class="crumb-item" id=${landingBanner.id}>
      <div class="crumb-item-index"> ${landingBanner.index} </div>
      <div class="crumb-item-title"> ${landingBanner.title}</div>
      <div class="crumb-item-desc"> ${landingBanner.description}</div>
    </div>
    <div class="crumb-item" id=${streamLengthForm.id} >
      <div class="crumb-item-index"> ${streamLengthForm.index} </div>
      <div class="crumb-item-title"> ${streamLengthForm.title}</div>
      <div class="crumb-item-desc"> ${streamLengthForm.description}</div>
    </div>
    <div class="crumb-item" id=${streamBitForm.id} >
      <div class="crumb-item-index"> ${streamBitForm.index} </div>
      <div class="crumb-item-title"> ${streamBitForm.title}</div>
      <div class="crumb-item-desc"> ${streamBitForm.description}</div>
    </div>
    <div class="crumb-item" id=${encoderScreen.id} >
      <div class="crumb-item-index"> ${encoderScreen.index} </div>
      <div class="crumb-item-title"> ${encoderScreen.title}</div>
      <div class="crumb-item-desc"> ${encoderScreen.description}</div>
    </div>

  </div>
`;

export { breadCrumbContent }