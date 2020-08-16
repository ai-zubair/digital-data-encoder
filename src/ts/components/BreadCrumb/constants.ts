export enum BreadCrumb{
  LandingBanner = "LandingBanner",
  StreamLengthForm = "StreamLengthForm",
  StreamBitForm = "StreamBitForm",
  EncoderScreen = "EncoderScreen"
}

export const BreadCrumbItems = {
  [BreadCrumb.LandingBanner]:{
    id: BreadCrumb.LandingBanner,
    index: "1",
    title: "Welcome",
    description: "An interactive digital data encoder."
  },
  [BreadCrumb.StreamLengthForm]:{
    id: BreadCrumb.StreamLengthForm,
    index: "2",
    title: "Length",
    description: "Enter the number of bits in the stream."
  },
  [BreadCrumb.StreamBitForm]:{
    id: BreadCrumb.StreamBitForm,
    index: "3",
    title: "Stream",
    description: "Enter the bits in the data stream."
  },
  [BreadCrumb.EncoderScreen]:{
    id: BreadCrumb.EncoderScreen,
    index: "4",
    title: "Encodings",
    description: "Line Encodings of the data stream"
  }
}