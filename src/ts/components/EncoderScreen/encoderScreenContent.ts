//@ts-ignore
import encoderScreenStyles from 'bundle-text:./encoderScreen.scss';

const encoderScreenContent = `
  <style>
    ${encoderScreenStyles}
  </style>
  <div class="encoder-screen-wrapper">
    <fancy-tabs>
      <div slot="tab" tabId="nrzl-encoding" class="tab-title-containers" >
        <button tabId="nrzl-encoding" class="tab-titles">NRZ-L</button>
      </div>
      <div slot="panel" class="encoding-panels">
        <div class="encoding-conatiners">
          <div class="encoding-info"></div>
          <canvas class="encoding-canvas"></canvas>
          <div class="encoding-logic"></div>
        </div>
      </div>

      <div slot="tab" tabId="rz-encoding" class="tab-title-containers">
        <button tabId="rz-encoding" class="tab-titles">RZ</button>
      </div>
      <div slot="panel" class="encoding-panels">
        <div class="encoding-info"></div>
        <canvas class="encoding-canvas"></canvas>
        <div class="encoding-logic"></div>
      </div>

      <div slot="tab" tabId="manchester-encoding" class="tab-title-containers">
        <button tabId="manchester-encoding" class="tab-titles">MANCHESTER</button>
      </div>
      <div slot="panel" class="encoding-panels">
        <div class="encoding-info"></div>
        <canvas class="encoding-canvas"></canvas>
        <div class="encoding-logic"></div>
      </div>

      <div slot="tab" tabId="diff-manchester" class="tab-title-containers">
        <button tabId="diff-manchester" class="tab-titles">D-MANCHESTER</button>
      </div>
      <div slot="panel" class="encoding-panels">
        <div class="encoding-info"></div>
        <canvas class="encoding-canvas"></canvas>
        <div class="encoding-logic"></div>
      </div>

      <div slot="tab" tabId="ami-encoding" class="tab-title-containers">
        <button tabId="ami-encoding" class="tab-titles">AMI</button>
      </div>
      <div slot="panel" class="encoding-panels">
        <div class="encoding-info"></div>
        <canvas class="encoding-canvas"></canvas>
        <div class="encoding-logic"></div>
      </div>
    </fancy-tabs>
  </div>
  <div class="navigation-bar-container">
    <div class="navigation-bar">
      <button class="back-button" id="back-button">BACK</button>
      <a href="https://www.linkedin.com/in/zubair-bashir/" target="_blank" class="profile-link">Like My Work? 👏🏻</a>
    </div>
  </div>
`;

export{ encoderScreenContent };