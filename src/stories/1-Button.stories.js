import React from 'react';
import FancyButton from '../lib/components/FancyButton';

export default {
  title: 'Button',
  component: FancyButton,
  parameters: {
    info: `
    USWDS 2.0 Button component
    Source: https://designsystem.digital.gov/components/button/
    `
  }
};

export const defaultButton = () => <FancyButton type="button">Click Me</FancyButton>;

export const disabled = () => (
  <FancyButton disabled>
    Click Me
  </FancyButton>
);
