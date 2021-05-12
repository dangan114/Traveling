import { Button, Dialog, DialogTitle } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

function NoDisplayDialog() {

    let [open, setOpen] = useState(false)
    let history = useHistory()

    useEffect(() => {
        setTimeout(() => {
            handleOpen()
        }, 1000);
    })

    function handleOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    function handleExplore() {
        history.push('/setup/country')
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby="no-display-dialog-title" open={open}>
            <DialogTitle id="no-display-dialog-title">
                Welcome to the Travel Portal where you log your most amazing journeys throughout your lifetime. We are here to help you cherish the memories about the places that you visited and longed for. Please proceed to begin your journey with us, simply by a click of a button!
            </DialogTitle>

            <Button style={{margin: '5vh 0', fontSize: '2em'}} onClick={() => handleExplore()} color='primary' fullWidth size="lg">Explore</Button>
        </Dialog>
    )
}

export default NoDisplayDialog;