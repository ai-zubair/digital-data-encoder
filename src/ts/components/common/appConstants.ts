export enum AppEvents{
  ActiveComponentChange = "active-component-change",
  LandingBannerShown = "landing-banner-shown",
  StreamLengthChange = "stream-length-change",
  ErrorNotification = "error-notification"
}

export enum AppAttributes{
  ComponentId = "componentid",
  ActiveCrumb = "activecrumb",
  ErrorMessage = "errormsg"
}

export enum AppComponentName{
  LandingBanner = "LandingBanner",
  StreamLengthForm = "StreamLengthForm",
  StreamBitForm = "StreamBitForm",
  EncoderScreen = "EncoderScreen"
}

export enum AppValidationMessages{
  StreamLengthError = "Data Stream Length Must Be Greater Or Equal To 2"
}