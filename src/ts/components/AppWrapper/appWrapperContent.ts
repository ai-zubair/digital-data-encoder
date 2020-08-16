//@ts-ignore
import appWrapperStyles from "bundle-text:./appWrapper.scss";

const appWrapperContent = `
  <style>
    ${appWrapperStyles}
  </style>
  <div id="app" class="app">
    <slot name="bread-crumb"></slot>
    <slot name="active-child-component"></slot>
  </div>
`;

export { appWrapperContent }