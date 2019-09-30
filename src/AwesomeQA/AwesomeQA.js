import React from 'react';
import { AwesomeForm } from '../AwesomeForm';
import AwesomeQuestions from '../AwesomeQuestions';
import Tooltip from '../UILibrary/Tooltip';
import { ThemeToggle } from '../Theme';
import { DisplaySection, FormSection } from './styled';
import H2 from '../UILibrary/Typography/H2';

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
      <AwesomeQuestions />
    </DisplaySection>
    <Tooltip
      content={<div>Here you can create new questions and their answers.</div>}
    >
      <H2>Created questions</H2>
    </Tooltip>
    <FormSection>
      <AwesomeForm />
    </FormSection>
  </>
);

export default AwesomeQA;
