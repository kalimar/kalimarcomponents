import React from 'react';
import { Button } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css';
import PropTypes from 'prop-types';

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

FancyButton.propTypes = {
  ariaLabel: PropTypes.string.isRequired
}

export default FancyButton;