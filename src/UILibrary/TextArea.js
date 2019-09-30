import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextArea = styled.textarea`
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
  resize: vertical;
  min-height: 50px;
  max-height: 200px;
  padding: 5px;
  font-size: 14px;
  line-height: 22px;
  border-width: 2px;
  border-radius: 4px;
  border-style: solid;
  font-family: sans-serif;
`;

TextArea.defaultProps = {
  rows: '4',
};

TextArea.propTypes = {
  rows: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;
