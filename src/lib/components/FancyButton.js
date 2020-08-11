import React from 'react';
import { Button } from '@trussworks/react-uswds';
import '@trussworks/react-uswds/lib/uswds.css';
import PropTypes from 'prop-types';


function FancyButton(props) {
  const {
    isLoading,
    loadingText,
    onClick,
    disabled,  
    ...otherProps} 
    = props;

  const computerisDisabled = disabled || isLoading;

  const handleMouseDown = (evt) => {
    if (disabled || isLoading) {
      evt.preventDefault();
  }
}

  const handleClick = (evt) => {
    if (disabled || isLoading) {
      evt.preventDefault();
    } else if (onClick) {
      onClick(evt);
    }
  }

  return (
    <Button
    aria-disabled={computerisDisabled ? true : undefined }
    aria-live="polite"
    aria-busy={isLoading ? true : false}
    aria-label={isLoading ? 'Loading' : undefined }
    disabled={disabled}
    onClick={(evt) => handleClick(evt)}
    onMouseDown={(evt) => handleMouseDown(evt)}
    {...otherProps}/>
  )
}

FancyButton.propTypes = {
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  loadingText: PropTypes.node,
  onClick: PropTypes.func
}

export default FancyButton;