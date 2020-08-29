//@ts-ignore
import appWrapperStyles from "bundle-text:./appWrapper.scss";

const appWrapperContent = `
  <style>
    ${appWrapperStyles}
  </style>
  <div id="app" class="app">
    <slot name="bread-crumb" id="bread-crumb-slot"></slot>
    <slot name="app-component" id="component-slot"></slot>
    <div class="notification-wrapper" id="notification">
      <div class="notification">
        <span class="notification-timer">x</span>
        <p class="notification-text">Dummy notification text is shown here</p>
        <span class="progress-bar"></span>
      </div>
    </div>
  </div>
`;

export { appWrapperContent }