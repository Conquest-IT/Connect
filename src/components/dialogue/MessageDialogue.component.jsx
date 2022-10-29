import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Divider } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function MessageDialogue({ message, msgDialOpen, handleMsgDial }) {
    return (
        <Dialog
            open={msgDialOpen}
            TransitionComponent={Transition}
            keepMounted
            fullWidth
            maxWidth="xs"
            onClose={handleMsgDial}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "5px",
                }}
            >
                <CheckCircleIcon color="success" />
                Success
            </DialogTitle>
            <Divider />
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">{message}</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleMsgDial} variant="outlined" size="small">
                    Okay
                </Button>
            </DialogActions>
        </Dialog>
    );
}
