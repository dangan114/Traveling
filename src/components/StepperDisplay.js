import { Button, Step, StepLabel, Stepper } from "@material-ui/core"
import { useDispatch, useStore } from "react-redux"
import { useHistory } from "react-router"
import allActions from "../store/actions"



function StepperDisplay(props) {

    const store = useStore()
    const dispatch = useDispatch()
    const history = useHistory()

    function getSteps() {
        if (store.getState().currentCountry.name !== "") {{
            return [store.getState().currentCountry.name, store.getState().currentCity.name, store.getState().currentHotel.name]
        }}
        return ['Select Country', 'Select City', 'Select Hotel']
    }

    function handleStepClick(index) {
        console.log(index)
        switch (index) {
            case 0: 
                console.log('0')
                dispatch(allActions.currentCountryAction.resetCountry())
                dispatch(allActions.currentCityAction.resetCity())
                dispatch(allActions.currentHotelAction.resetHotel())
                history.push('/setup/country')
                break
            case 1:
                console.log('1')
                dispatch(allActions.currentCityAction.resetCity())
                dispatch(allActions.currentHotelAction.resetHotel())
                history.push('/setup/city')
                break
            case 2:
                console.log('2')
                dispatch(allActions.currentHotelAction.resetHotel())
                history.push('/setup/hotel')
                break
            
        }
    }

    return (
        <Stepper activeStep={props.activeStep} alternativeLabel>
            {getSteps().map((label, index) => (
              <Step key={label}>
                <StepLabel><Button style={{visibility: label == "" ? 'hidden' : 'visible'}} onClick={() => handleStepClick(index)}>{label}</Button></StepLabel>
              </Step>
            ))
            }
        </Stepper>
    )
}

export default StepperDisplay