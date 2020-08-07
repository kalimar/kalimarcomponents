import React from 'react';
import { DateInput as TWDateInput } from '@trussworks/react-uswds';
import PropTypes from 'prop-types'
import '@trussworks/react-uswds/lib/uswds.css';

function DateInput(props) {
    return (
        <TWDateInput {...props}/>
    )
}

DateInput.propTypes = {
    name: PropTypes.string,
    unit: PropTypes.string,
    maxLength: PropTypes.number
}

export default DateInput