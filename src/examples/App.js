import React from 'react';
import { FancyButton } from '../lib';

const App = () => (
    <div style={{ width: 640, margin: "15px auto" }}>
        <FancyButton secondary ariaLabel="submit">Submit</FancyButton>
    </div>
)

export default App;