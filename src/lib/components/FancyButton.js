import React from 'react';
import { Button } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css';

function fancyButton() {
  class FancyButton extends React.Component {
    render() {
      const { ariaLabel, ...otherProps} = this.props;
      return <Button  {...otherProps} aria-label={ariaLabel}/>;
    }
  }
  return FancyButton;
}

const FancyButton = fancyButton();

export default FancyButton;