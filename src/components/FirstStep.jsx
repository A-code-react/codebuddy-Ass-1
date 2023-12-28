import { useContext, useState } from 'react';
import { Button, TextField } from "@mui/material";
import { multiStepContext } from './../StepContext';

const FirstStep = () => {
    const { setStep, userData, setUserData } = useContext(multiStepContext);
    const [email, setEmail] = useState(userData.email || "");
    const [password, setPassword] = useState(userData.password || "");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setEmailError("Invalid email format");
        } else {
            setEmailError("");
        }
    };

    const validatePassword = () => {
        const passwordRegex = /^(?=.*[A-Z].*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d.*\d)(?=.*[\W_].*[\W_]).{8,}$/;

        if (!passwordRegex.test(password)) {
            setPasswordError("Password must contain minimum 2 capital letters, 2 small letters, 2 numbers, and 2 special characters.");
        } else {
            setPasswordError("");
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError(""); // Clear error when typing
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError(""); // Clear error when typing
    };

    const isFormValid = !emailError && !passwordError;

    const handleNext = () => {
        if (isFormValid) {
            setUserData({ ...userData, email, password });
            setStep(2);
        }
    };

    return (
        <div>
            <div>
                <TextField
                    label="Email ID"
                    variant="outlined"
                    margin="normal"
                    color="secondary"
                    fullWidth
                    required
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={validateEmail}
                    error={Boolean(emailError)}
                    helperText={emailError}
                />
            </div>
            <div>
                <TextField
                    label="Password"
                    variant="outlined"
                    margin="normal"
                    color="secondary"
                    fullWidth
                    required
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    onBlur={validatePassword}
                    error={Boolean(passwordError)}
                    helperText={passwordError}
                />
            </div>
            <div>
                <Button variant="contained" color="primary" disabled={!isFormValid} onClick={handleNext}>
                    Next
                </Button>
            </div>
        </div>
    );
};

export default FirstStep;
