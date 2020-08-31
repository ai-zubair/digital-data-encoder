import { AppWrapper } from './components/AppWrapper/AppWrapper';
import { BreadCrumb } from './components/BreadCrumb/BreadCrumb';
import { LandingBanner } from "./components/LandingBanner/LandingBanner";
import { StreamLengthForm } from './components/StreamLengthForm/StreamLengthForm';
import { FancyInputList } from './components/FancyInputList/FancyInputList';
import { StreamBitForm } from './components/StreamBitForm/StreamBitForm';
import { FancyTabs } from './components/FancyTabs/FancyTabs';
import { EncoderScreen } from './components/EncoderScreen/EncoderScreen';

customElements.define("app-wrapper", AppWrapper);
customElements.define("bread-crumb", BreadCrumb);
customElements.define("landing-banner", LandingBanner);
customElements.define("stream-length-form", StreamLengthForm);
customElements.define("fancy-input-list", FancyInputList);
customElements.define("stream-bit-form", StreamBitForm);
customElements.define("fancy-tabs", FancyTabs);
customElements.define("encoder-screen", EncoderScreen);