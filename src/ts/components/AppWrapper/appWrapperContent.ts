//@ts-ignore
import appWrapperStyles from "bundle-text:./appWrapper.scss";

const appWrapperContent = `
  <style>
    ${appWrapperStyles}
  </style>
  <div id="app" class="app">
    <slot name="bread-crumb" id="bread-crumb-slot"></slot>
    <slot name="app-component" id="component-slot"></slot>
  </div>
`;

export { appWrapperContent }