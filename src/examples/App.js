import React from 'react';
import { FancyButton } from '../lib';
import { DateInput } from '@trussworks/react-uswds';

const clickFunction = (e) => console.log(e);

const App = () => (
    <div style={{ width: 640, margin: "15px auto" }}>
        <FancyButton type="button" onClick={(e) => clickFunction(e)}>Submit</FancyButton>
       <DateInput/>
    </div>
)

export default App;