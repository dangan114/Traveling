import CountryInput from './CountryInput';
import SetupWrapper from './SetupWrapper'
import StepperDisplay from './StepperDisplay';

function CountrySetup() {
  return (
    <div>
      <SetupWrapper 
        child1={<StepperDisplay activeStep={0} />}
        child2={<CountryInput />} 
      >
      </SetupWrapper>
    </div>
  );
}

export default CountrySetup;
