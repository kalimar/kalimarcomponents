import React from 'react';
import { DateInput} from '@trussworks/react-uswds';
import DateOfBirth from '../lib/components/DateOfBirth/DateOfBirth.js';


export default {
  title: 'Date of Birth Example',
  component: DateInput,
  parameters: {
    info: `
USWDS 2.0 DateInput component
Source: https://designsystem.digital.gov/components/form-controls/#date-input
`,
  }
};

export const dateOfBirthExample = () => <DateOfBirth/>
