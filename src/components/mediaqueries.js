import { css } from "styled-components";

const sizes = {
  big: 2200,
  xlarge: 1800,
  xl: 1660,
  xldesktop: 1440,
  bigdesktop: 1330,
  desktop: 992,
  tablet: 768,
  phone: 576,
  mini: 200
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media