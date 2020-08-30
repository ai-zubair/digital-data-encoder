// @ts-ignore
import streamBitFormStyles from 'bundle-text:./streamBitForm.scss';
import { FancyInputListAttributes } from '../FancyInputList/FancyInputList';

const streamBitFormContent = `
  <style>
    ${streamBitFormStyles}
  </style>
  <div class="form-wrapper">
    <p class="form-header">Data Stream Bits</p>
    <fancy-input-list id="input-list" ${FancyInputListAttributes.TYPE}="number" ${FancyInputListAttributes.VALID_VALUES}="0:1" ${FancyInputListAttributes.LIST_LENGTH}="0"></fancy-input-list> 
    <div class="nav-button-wrapper">
      <button class="prev-button action-button" id="prev-button">BACK</button>
      <button class="next-button action-button" id="next-button">NEXT</button>
    </div>
  </div>
`;

export { streamBitFormContent }