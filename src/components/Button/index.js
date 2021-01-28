import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.backgroundButton};
  color: ${({ theme }) => theme.colors.contrastText};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 16px;
  line-height: 1;
  text-transform: full-width;
  outline: 0;
  transition: .2s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .75;
  }
  &:disabled {
    background-color: #31171E;
    cursor: pointer;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;