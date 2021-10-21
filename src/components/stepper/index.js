import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import {Link } from "react-router-dom";



export default function HorizontalNonLinearStepper({steps}) {
  const [activeStep, setActiveStep] = React.useState(0);
 
  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((menu, index) => (
          <Step key={index}>
            <StepButton color="inherit" onClick={handleStep(index)}>
                <Link to={`${menu.route}`}>{menu.label}</Link>
            </StepButton>
          </Step>
        ))}

      </Stepper>
    </Box>
  );
}
