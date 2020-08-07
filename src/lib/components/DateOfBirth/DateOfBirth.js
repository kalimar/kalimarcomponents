import React from 'react';
import { DateInput, DateInputGroup, Fieldset } from '@trussworks/react-uswds';
import './style.scss';



function DateOfBirth(props) {


  return (
    <Fieldset className="date-of-birth" legend="Date of birth">
    <span className="usa-hint" id="dateOfBirthHint">
      mm/dd/yyyy
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
  )
}



export default DateOfBirth;