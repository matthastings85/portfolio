import { css } from "styled-components";

// https://reactcommunity.org/react-transition-group/css-transition

// These are the CSS transitions for loading using React Transition Groups

const TransitionStyles = css`
  /* Fade up */
  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 400ms ease-in, transform 400ms ease-in;
  }
  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 400ms ease-in, transform 400ms ease-in;
  }
  /* Fade down */
  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 400ms ease-in, transform 400ms ease-in;
  }
  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 400ms ease-in, transform 400ms ease-in;
  }
`;

export default TransitionStyles;
