import HotelInput from './HotelInput'
import SetupWrapper from './SetupWrapper'
import StepperDisplay from './StepperDisplay';

function HotelSetup() {
  return (
    <div>
      <SetupWrapper 
        child1={<StepperDisplay activeStep={2} />}
        child2={<HotelInput />} 
      >
      </SetupWrapper>
    </div>
  );
}

export default HotelSetup;
