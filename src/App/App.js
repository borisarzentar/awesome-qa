import React from 'react';
import AwesomeQA from '../AwesomeQA';
import {
  Title,
  Background,
  DescriptionSection,
  DescriptionText,
  ContentSection,
  ResponsiveContainer,
} from './styled';
import Providers from './Providers';

export default function App() {
  return (
    <Providers>
      <Background>
        <Title>The awesome Q/A tool</Title>
        <ResponsiveContainer>
          <DescriptionSection>
            <DescriptionText>
              Here you can find no questions, feel free to create your own
              questions!
            </DescriptionText>
          </DescriptionSection>
          <ContentSection>
            <AwesomeQA />
          </ContentSection>
        </ResponsiveContainer>
      </Background>
    </Providers>
  );
}
