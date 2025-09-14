import { useState } from 'react';
import emailjs from '@emailjs/browser';
import MuiAlert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// style used in the component
const useStyles = makeStyles({
    root: {
        border: 'none',
        boxShadow: 'none',
        height: 550,
        maxWidth: 600,
        minHeight: '100vh'
    },
    form: {
        maxWidth: 700
    },
    button: {
        color: 'white',
        backgroundColor: '#646d8f',
        marginTop: 20
    }
});

// alert bar used for success or failure of message
const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
};

// contact component
const Contact = () => {
    // initialize message sent to false
    const [messageSent, setMessageSent] = useState(false);
    // initialize submission error to false
    const [submissionError, setSubmissionError] = useState(false);
    // controller for opening and closing the message bar
    const [open, setOpen] = useState(false);
    // initialize values to be empty
    const [values, setValues] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    // initialize errors to be empty
    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    // form input value handler
    const handleInputValue = (event) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value
        });
        // validate input value
        validateValues({ [name]: value });
    };

    // form input value validator
    const validateValues = (values) => {
        let temp = { ...errors };

        if ('name' in values)
            temp.name = values.name ? '' : 'Required';

        if ('email' in values) {
            temp.email = values.email ? '' : 'Required';
            if (values.email)
                temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(
                    values.email
                )
                    ? ''
                    : 'Invalid Email Address';
        }

        if ('phone' in values)
            if (values.phone)
                temp.phone = /^\d+$/.test(values.phone)
                    ? ''
                    : 'Invalid Phone Number';
        if ('message' in values)
            temp.message =
                values.message.length !== 0 ? '' : 'Required';

        // set errors if any
        setErrors({
            ...temp
        });
    };

    // set form valid depending on the amount of errors
    const formIsValid = () => {
        const isValid =
            values.name &&
            values.email &&
            values.message &&
            Object.values(errors).every((x) => x === '');

        return isValid;
    };

    // form submit handler
    const formSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const response = await emailjs.sendForm(
                'service_v9sjkrn',
                'template_bh09a9k',
                event.target,
                {
                    publicKey: 'xDyZwevMBFK2WCSqh',
                }
            );

            if (response.status === 200) {
                setMessageSent(true);
                setOpen(true);
                setTimeout(() => {
                    setOpen(false);
                }, 5000);
                setValues({
                    name: '',
                    phone: '',
                    email: '',
                    message: ''
                });
            }
        } catch (err) {
            setSubmissionError(true);
            setOpen(true);
            setTimeout(() => {
                setOpen(false);
            }, 5000);
        }
    };

    // use material ui styles
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                {/* if submission error occures open message box */}
                {submissionError && (
                    <Collapse in={open}>
                        <Alert severity="error">
                            Error while sending message! Please try
                            again!
                        </Alert>
                    </Collapse>
                )}

                {/* if message issuccesfully sent error occures open message box */}
                {messageSent && (
                    <Collapse in={open}>
                        <Alert severity="success">
                            Message sent successfully!
                        </Alert>
                    </Collapse>
                )}

                <form
                    className="contact-form"
                    onSubmit={formSubmitHandler}
                >
                    <Typography variant="h6" color="textPrimary">
                        Contact Me
                    </Typography>

                    {/* textfield for name */}
                    {/* set error to true and show helper text if error is present */}
                    <TextField
                        name="name"
                        label="Name"
                        fullWidth
                        onBlur={handleInputValue}
                        onChange={handleInputValue}
                        autoComplete="none"
                        {...(errors['name'] && {
                            error: true,
                            helperText: errors['name']
                        })}
                        value={values.name}
                    />

                    {/* textfield for email */}
                    <TextField
                        name="email"
                        label="Email"
                        fullWidth
                        onBlur={handleInputValue}
                        onChange={handleInputValue}
                        value={values.email}
                        autoComplete="none"
                        {...(errors['email'] && {
                            error: true,
                            helperText: errors['email']
                        })}
                    />

                    {/* textfield for phone */}
                    <TextField
                        name="phone"
                        label="Phone"
                        fullWidth
                        onBlur={handleInputValue}
                        onChange={handleInputValue}
                        autoComplete="none"
                        value={values.phone}
                        {...(errors['phone'] && {
                            error: true,
                            helperText: errors['phone']
                        })}
                    />

                    {/* textfield for message */}
                    <TextField
                        label="Message"
                        placeholder="Message"
                        name="message"
                        multiline
                        fullWidth
                        rows={4}
                        onBlur={handleInputValue}
                        onChange={handleInputValue}
                        value={values.message}
                        autoComplete="none"
                        {...(errors['message'] && {
                            error: true,
                            helperText: errors['message']
                        })}
                    />

                    {/* submit button */}
                    <Button
                        type="submit"
                        variant="contained"
                        key={`${!formIsValid()}`}
                        endIcon={<SendIcon>Send</SendIcon>}
                        disabled={!formIsValid()}
                        className={classes.button}
                    >
                        Send
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};

export default Contact;
