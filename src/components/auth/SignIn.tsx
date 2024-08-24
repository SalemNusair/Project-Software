import React, { Component, useState } from "react";

// material ui
import {
    Avatar,
    Button,
    CssBaseline,
    Container,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Box,
    Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

// styles
import styles from "./styles";
import { withStyles } from "@material-ui/core";

// utils
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import Copyright from "./Copyright";

const SignIn = ({ authError, auth, classes, signIn }) => {
    const [state, setState] = useState({ email: "", password: "" });
    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        signIn(this.state);
    };
    const handleChange = (e) => {
        setState({
            [e.target.id]: e.target.value,
        });
    };

    if (auth.uid) return <Redirect to="/" />;
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form
                    className={classes.form}
                    noValidate={false}
                    onSubmit={handleSubmit}
                >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChange}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                    {authError && (
                        <div
                            style={{
                                color: "red",
                                marginTop: "20px",
                                textAlign: "center",
                            }}
                        >
                            Invalid email or Password
                        </div>
                    )}
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
};
const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (cred) => dispatch(signIn(cred)),
    };
};
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
)(SignIn);
