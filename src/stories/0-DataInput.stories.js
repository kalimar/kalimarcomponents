import React from 'react';
import { DateInput, DateInputGroup, Fieldset } from '@trussworks/react-uswds';

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

export const dateOfBrithExample = () => {
return (
  <Fieldset legend="Date of birth">
    <span className="usa-hint" id="dateOfBirthHint">
      For example: 4 28 1986
    </span>
    <DateInputGroup>
      <DateInput
        id="testDateInput"
        name="testName"
        label="Month"
        unit="month"
        maxLength={2}
        minLength={2}
      />
      <DateInput
        id="testDateInput"
        name="testName"
        label="Day"
        unit="day"
        maxLength={2}
        minLength={2}
      />
      <DateInput
        id="testDateInput"
        name="testName"
        label="Year"
        unit="year"
        maxLength={4}
        minLength={4}
      />
    </DateInputGroup>
    </Fieldset>
);
}

