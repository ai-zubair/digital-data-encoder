export enum AppEvents{
  ActiveComponentChange = "active-component-change",
  LandingBannerShown = "landing-banner-shown",
  StreamLengthChange = "stream-length-change",
  ErrorNotification = "error-notification",
  NotifcationClose = "notification-close"
}

export enum AppAttributes{
  ComponentId = "component-id",
  ActiveCrumb = "active-crumb",
  ErrorMessage = "error-msg",
  DataStreamLength = "data-stream-length",
  InputListLength = "input-list-length"
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