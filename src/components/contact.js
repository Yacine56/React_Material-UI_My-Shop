import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyle } from "./css/contact-css";
import Input from "./UI/input";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const Contact = () => {
  const classes = useStyle();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [details, setDetails] = useState("");
  const [open, setOpen] = React.useState(false);

  const onChange = (event) => {
    let valide;
   
    switch (event.target.name) {
      case "firstName":
        valide = /^[A-Za-z]*$/.test(event.target.value);
        if (valide) {
          setFirstName(event.target.value);
        }break;
      case "lastName":
        valide = /^[A-Za-z]*$/.test(event.target.value);
        if (valide) {
          setLastName(event.target.value);
        }break;
      case "email":
        setEmail(event.target.value);break;

      case "phoneNumber":
        valide = /^\d*$/.test(event.target.value);
        if (valide) {
          setPhoneNumber(event.target.value);
        }break;

      case "details":
        setDetails(event.target.value);break;
    }
  
  };

  const onReset = () => {
    setFirstName("");
    setDetails("");
    setEmail("");
    setLastName("");
    setPhoneNumber("");
    setOpen(false)
  };

  const submit = () => {};

  const openResetDialogue=()=>{
    setOpen(true);
}

const handleClose = () => {
  setOpen(false);
 
};

  return (
    <Grid container className={classes.container}>
      <Grid
        item
        container
        direction="column"
        className={classes.formContainer}
        alignItems="center"
      >
        <Typography className={classes.title}>Got a question ?</Typography>
        <Typography className={classes.subtitle}>
          please fill up the form below and we will get back to you as soon as
          possible.
          <br />
          thank you 😊
        </Typography>
        <Input
          label="First Name"
          value={firstName}
          type="text"
          field="input"
          required
          name="firstName"
          className={classes.input}
          inputlabel={{ className: classes.inputLabel }}
          onChange={onChange}
        />
        <Input
          label="Last Name"
          value={lastName}
          type="text"
          field="input"
          required
          name="lastName"
          className={classes.input}
          inputlabel={{ className: classes.inputLabel }}
          onChange={onChange}
        />
        <Input
          label="E-Mail"
          value={email}
          type="email"
          field="input"
          required
          name="email"
          className={classes.input}
          inputlabel={{ className: classes.inputLabel }}
          onChange={onChange}
        />
        <Input
          label="Phone Number"
          value={phoneNumber}
          type="tel"
          field="input"
          required
          name="phoneNumber"
          className={classes.input}
          inputlabel={{ className: classes.inputLabel }}
          onChange={onChange}
          maxLength={10}
        />
        <Input
          label="Details"
          value={details}
          type="text"
          field="textarea"
          required
          name="details"
          className={classes.input}
          inputlabel={{ className: classes.inputLabel }}
          rows={6}
          cols={70}
          maxLength={250}
          onChange={onChange}
        />

        <Grid item className={classes.buttons}>
          <Button
            variant="contained"
            className={classes.reset}
            onClick={openResetDialogue}
            disabled={(
              firstName.length === 0 &&
              lastName.length === 0 &&
              phoneNumber.length === 0 &&
              email.length === 0 &&
              details.length === 0)
            }
          >
            <Typography className={classes.resetText}>Reset Form</Typography>
          </Button>
          <Button
            variant="contained"
            className={classes.submit}
            onClick={submit}
            disabled={ (
              firstName.length === 0 ||
              lastName.length === 0 ||
              phoneNumber.length === 0 ||
              email.length === 0 ||
              details.length === 0
            )}
            style={{ backgroundImage:  (
              firstName.length === 0 ||
              lastName.length === 0 ||
              phoneNumber.length === 0 ||
              email.length === 0 ||
              details.length === 0
            ) && "none" }}
          >
            <Typography className={classes.resetText}>Submit</Typography>
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        style={{padding:"2em"}}
      >
        <DialogTitle id="alert-dialog-slide-title">{"Do you really want to reset the form?"}</DialogTitle>
        
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="contained">
            Cancel
          </Button>
          <Button onClick={onReset} color="primary" variant="contained">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Contact;
