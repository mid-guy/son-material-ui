import { css } from '@emotion/react';
const getButtonCss = (theme, props) => css `
  background: none;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  height: 36px;
  font-size: 14px;
  > * {
    pointer-events: none;
  }
  font-family: ${theme.typography.fontFamily};
  &:disabled {
    color: rgba(0, 0, 0, 0.26);
    pointer-events: none;
    ${props.variant === "container" && "background-color: rgba(0, 0, 0, 0.12)"}
    ${props.variant === "outlined" && "border: 1px solid rgba(0, 0, 0, 0.12)"}
    ${props.variant === "text" && "border: none"}
  }
  ${props.fullWidth && "width: 100%"};

  label {
    display: block;
  } 

  ${theme.animationframe.button.animationframe[props.animationframe]};

  ${theme.components.button.backgrounds[props.background]};
  
  ${theme.components.button.sizes[props.size]};

  ${theme.components.button.variants[props.variant]};
  
  ${props.isVisible ? 'display: none' : 'display: block'}
`;
export default getButtonCss;
