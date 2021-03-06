import { Grid } from '@material-ui/core'
import NavBar from './NavBar'

// function getSteps() {
//   return ['Select Country', 'Select City', 'Select Hotel']
// }

function SetupWrapper({ child1, child2 }) {

  // const [activeStep, setActiveStep] = useState(0)
  // const steps = getSteps()

  // const handleNext = () => {
  //   setActiveStep(prevActiveStep => prevActiveStep + 1)
  // }

  // const handleBack = () => {
  //   setActiveStep(prevActiveStep => prevActiveStep - 1)
  // }

  // const handleReset = () => {
  //   setActiveStep(0)
  // }

  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
      </Grid>
      
      <Grid
        container
        spacing={4}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh', width: '100%' }}
      > 
        <Grid item lg={6} md={6} sm={12} style={{margin: "0 auto", width: '100%'}}>
          {child1}
        </Grid>
        <Grid item xs={12}>
          {child2} 
        </Grid>
      </Grid>
    </div>
  );
}


export default SetupWrapper;
