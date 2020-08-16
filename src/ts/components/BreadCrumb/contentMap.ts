import { AppComponentName } from '../common/appConstants';

export const BreadCrumbItems = {
  [AppComponentName.LandingBanner]:{
    id: AppComponentName.LandingBanner,
    index: "1",
    title: "Welcome",
    description: "An interactive digital data encoder."
  },
  [AppComponentName.StreamLengthForm]:{
    id: AppComponentName.StreamLengthForm,
    index: "2",
    title: "Length",
    description: "Enter the number of bits in the stream."
  },
  [AppComponentName.StreamBitForm]:{
    id: AppComponentName.StreamBitForm,
    index: "3",
    title: "Stream",
    description: "Enter the bits in the data stream."
  },
  [AppComponentName.EncoderScreen]:{
    id: AppComponentName.EncoderScreen,
    index: "4",
    title: "Encodings",
    description: "Line Encodings of the data stream"
  }
}