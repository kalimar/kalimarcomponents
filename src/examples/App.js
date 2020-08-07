import React from 'react';
import { FancyButton } from '../lib';
import { DateInput } from '@trussworks/react-uswds';

const App = () => (
    <div style={{ width: 640, margin: "15px auto" }}>
        <FancyButton secondary ariaLabel="submit">Submit</FancyButton>
       <DateInput/>
    </div>
)

export default App;