//@ts-ignore
import formStyles from 'bundle-text:./streamLengthForm.scss';

const streamLengthFormContent = `
  <style>
  ${formStyles}
  </style>
  <div class="form-wrapper">
    <label for="length-input" class="input-label">Stream Length(in bits)</label>
    <input id="length-input" class="length-input" type="number" min="2" max="16" placeholder="0"/>
    <button class="next-button">NEXT</button>
  </div>
`;

export{ streamLengthFormContent };