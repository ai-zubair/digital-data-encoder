//@ts-ignore
import landingBannerStyles from 'bundle-text:./landingBannerStyles.scss'

const landingBannerContent = `
  <style>
    ${landingBannerStyles}
  </style>
  <div class="landing-wrapper">
    <p class="landing-text" id="landing-text">
      <span class="landing-text-word" id="digital">0100110</span>
      <span class="landing-text-word" id="data">0010</span>
      <span class="landing-text-word" id="encoder">1101001001</span> 
    </p>
  </div>
`;

export { landingBannerContent };