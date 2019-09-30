import styled from 'styled-components';

export default styled.div`
  position: relative;
  display: flex;
  flex-direction: ${props => (props.vertical ? 'column' : 'row')};
  margin-bottom: 20px;
`;
