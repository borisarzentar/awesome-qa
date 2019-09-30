import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  ${({ theme }) => {
    const input = theme.ui.inputs.text;
    return `
      color: ${input.textColor};
      background-color: ${input.backgroundColor};
      border-color: ${input.borderColor}

      &:focus {
        outline: 0;
        border-color: ${input.focusColor};
      }
    `;
  }}
  padding: 5px;
  font-size: 14px;
  line-height: 22px;
  border-width: 2px;
  border-radius: 4px;
  border-style: solid;
  font-family: sans-serif;
`;

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
