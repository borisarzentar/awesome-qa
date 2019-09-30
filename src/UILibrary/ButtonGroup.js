import styled from 'styled-components';
import { Button } from './Button';

export default styled.div`
  ${Button} + ${Button} {
    margin-left: 5px;
  }
`;
