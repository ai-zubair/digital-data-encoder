//@ts-ignore
import appWrapperStyles from "bundle-text:./appWrapper.scss";

const appWrapperContent = `
  <style>
    ${appWrapperStyles}
  </style>
  <div id="app" class="app">
    <slot name="active-child-component" id="child-component"></slot>
  </div>
`;

export { appWrapperContent }