import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'green',
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 50px;
  border-radius: 4px;
  border: 0;
  margin: 8px;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};

  /* ${props => {
    return css`
      background-color: ${props.theme.primary};
    `
  }} */
  /* background-color: ${props => props.theme.primary}; */
  /* ${(props) => {
    return css`
    background-color: ${buttonVariants[props.variant]};
    border: none;
    border-radius: 5px;
    `;
  }} */
`;
