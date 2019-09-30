import styled from 'styled-components';
import H1 from '../UILibrary/Typography/H1';
import Text from '../UILibrary/Typography/Text';
import { get } from '../utils';

export const Background = styled.div`
  background-color: ${get('ui.backgroundColor')};
  height: 100%;
`;

export const DescriptionSection = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  box-sizing: border-box;
  border-bottom: 2px solid ${get('ui.delimiterColor')};
`;

export const Title = styled(H1)`
  text-align: center;
  margin-bottom: 20px;
`;

export const DescriptionText = styled(Text)``;

export const ContentSection = styled.div`
  flex: 1;
  padding: 20px;
  min-width: 350px;
  max-width: 650px;
  box-sizing: border-box;
`;

export const ResponsiveContainer = styled.div`
  display: flex;
  max-width: 1024px;
  flex-direction: column;
  box-sizing: border-box;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    margin: 0 auto;

    ${DescriptionSection} {
      border-bottom: 0px;
      margin-bottom: 0px;
      border-right: 2px solid ${get('ui.delimiterColor')};
    }

    ${DescriptionText} {
      max-width: 200px;
      text-align: start;
    }
  }
`;
