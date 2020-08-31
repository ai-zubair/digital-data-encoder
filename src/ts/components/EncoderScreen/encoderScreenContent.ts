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
      <div slot="panel" class="encoding-panel">
        This is the encoding panel
      </div>

      <div slot="tab" tabId="rz-encoding" class="tab-title-containers">
        <button tabId="rz-encoding" class="tab-titles">RZ</button>
      </div>
      <div slot="panel" class="encoding-panel">
        This is the encoding panel
      </div>

      <div slot="tab" tabId="manchester-encoding" class="tab-title-containers">
        <button tabId="manchester-encoding" class="tab-titles">MANCHESTER</button>
      </div>
      <div slot="panel" class="encoding-panel">
        This is the encoding panel
      </div>

      <div slot="tab" tabId="diff-manchester" class="tab-title-containers" active>
        <button tabId="diff-manchester" class="tab-titles">D-MANCHESTER</button>
      </div>
      <div slot="panel" class="encoding-panel">
        This is the encoding panel
      </div>

      <div slot="tab" tabId="ami-encoding" class="tab-title-containers">
        <button tabId="ami-encoding" class="tab-titles">AMI</button>
      </div>
      <div slot="panel" class="encoding-panel">
        This is the encoding panel
      </div>
    </fancy-tabs>
  </div>
`;

export{ encoderScreenContent };