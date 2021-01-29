import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.backgroundButton};
  color: ${({ theme }) => theme.colors.fontColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 3;
  width: 100%;
  padding: 12px 15px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .7s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .7;
  }
  &:disabled {
    background-color: #5A6B7F;
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;