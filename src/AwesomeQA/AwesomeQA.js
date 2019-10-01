import React from 'react';
import Tooltip from '../UILibrary/Tooltip';
import { ThemeToggle } from '../Theme';
import { DisplaySection, FormSection } from './styled';
import H2 from '../UILibrary/Typography/H2';
import { SmartAwesomeForm } from '../AwesomeForm';
import { SmartAwesomeQuestions } from '../AwesomeQuestions';

const AwesomeQA = () => (
  <>
    <ThemeToggle />
    <Tooltip
      content={
        <div>Here you can find the created questions and their answers.</div>
      }
    >
      <H2>Created questions</H2>
    </Tooltip>
    <DisplaySection>
      <SmartAwesomeQuestions />
    </DisplaySection>
    <Tooltip
      content={<div>Here you can create new questions and their answers.</div>}
    >
      <H2>Created questions</H2>
    </Tooltip>
    <FormSection>
      <SmartAwesomeForm />
    </FormSection>
  </>
);

export default AwesomeQA;
