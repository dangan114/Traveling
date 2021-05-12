import { Button, Dialog, DialogTitle, Grid, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import NavBar from "./NavBar";

function Feedback() {

    const history = useHistory(); 

    let [open, setOpen] = useState(false)
    let [email, setEmail] = useState('')
    let [feedback, setFeedback] = useState('')

    const serviceId = "service_77ieg3h"
    const templateId = "template_w3u0std"

    const dev_response = "Thank You For Your Feedback. A Developer From Our Team Will Contact You Shortly. Thank You For Choosing Our Services!";

    function handleSubmit() {
       
        sendFeedback(templateId, {
            message: feedback,
            user_email: email,
            from_name: "Travel Portal Team",
        });

        setOpen(true)
    }

    function sendFeedback (templateId, variables) {
        window.emailjs.send(
          serviceId, 
          templateId,
          variables
          ).then(res => {
            console.log('Email successfully sent!')
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }

    function handleFeedbackDone() {
        history.push('/data')
    }

    return (
        <div>
            <NavBar />

            <Grid direction="column" alignContent="center" container spacing={3}>
                <Grid item xs={12} style={{margin: '5vh 0'}}>
                <TextField
                    required
                    id="filled-required"
                    label="Email"
                    placeholder="your_email@email.com"
                    variant="outlined"
                    onChange={e => setEmail(e.target.value)}
                    fullWidth
                />
                </Grid>

                <Grid item xs={12} style={{margin: '5vh 0'}}>
                <TextField
                    id="outlined-multiline-static"
                    label="Feedback"
                    multiline
                    rows={6}
                    placeholder="Instant feedback to the developers"
                    variant="outlined"
                    fullWidth
                    onChange={e => setFeedback(e.target.value)}
                />
                </Grid>

                <Grid item xs={12}>
                    <Button fullWidth onClick={handleSubmit}>Submit</Button>
                </Grid>
            </Grid>


            <Dialog aria-labelledby="feedback-dialog-title" open={open}>
                <DialogTitle id="feedback-dialog-title">
                    {dev_response}
                </DialogTitle>

                <Button style={{margin: '5vh 0', fontSize: '2em'}} onClick={() => handleFeedbackDone()} color='primary' fullWidth size="lg">Got It!</Button>
            </Dialog>
        </div>
    )
}

export default Feedback; 