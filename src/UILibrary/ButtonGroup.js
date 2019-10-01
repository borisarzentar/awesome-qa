import styled from 'styled-components';
import { Button } from './Button';

export default styled.div`
  display: flex;
  flex-wrap: nowrap;

  ${Button} + ${Button} {
    margin-left: 5px;
  }
`;
