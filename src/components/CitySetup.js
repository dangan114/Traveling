import CityInput from './CityInput'
import SetupWrapper from './SetupWrapper'
import StepperDisplay from './StepperDisplay';

function CitySetup() {
  return (
    <div>
      <SetupWrapper 
        child1={<StepperDisplay activeStep={1} />}
        child2={<CityInput />} 
      >
      </SetupWrapper>
    </div>
  );
}

export default CitySetup;
