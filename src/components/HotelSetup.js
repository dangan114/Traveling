import { useEffect, useState } from 'react';
import HotelInput from './HotelInput'
import SetupWrapper from './SetupWrapper'
import StepperDisplay from './StepperDisplay';

function HotelSetup(props) {

  var [error, setError] = useState('');

  useEffect(() => {
    if (props.location.state !== undefined) {
      setError(props.location.state.error)
    }
  })

  return (
    <div>
      <SetupWrapper 
        child1={<StepperDisplay activeStep={2} />}
        child2={<HotelInput error={error} />} 
      >
      </SetupWrapper>
    </div>
  );
}

export default HotelSetup;
