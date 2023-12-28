import { useContext, useState, useEffect } from 'react';
import { Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { multiStepContext } from '../StepContext';

const ThirdStep = () => {
    const { setStep, userData, setUserData, finalData, setFinalData } = useContext(multiStepContext);
    const [countryCode, setCountryCode] = useState(userData.countryCode || '');
    const [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber || '');
    const [acceptTermsAndCondition, setAcceptTermsAndCondition] = useState(userData.acceptTermsAndCondition || false);

    useEffect(() => {
        // Save data to userData on component mount
        setUserData((prevData) => ({ ...prevData, countryCode, phoneNumber, acceptTermsAndCondition }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    const handleCountryCodeChange = (event) => {
        setCountryCode(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        const inputPhoneNumber = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters
        setPhoneNumber(inputPhoneNumber.slice(0, 10)); // Allow only 10 digits
    };

    const handleAcceptTermsChange = (event) => {
        setAcceptTermsAndCondition(event.target.checked);
    };



    const handleSubmit = () => {
        const newData = { ...userData, countryCode, phoneNumber, acceptTermsAndCondition };
        setFinalData((prevData) => [...prevData, newData]);

    };

    useEffect(() => {
        console.log(finalData);
    }, [finalData]);

    const isFormValid = countryCode && phoneNumber.length === 10 && acceptTermsAndCondition;

    return (
        <div>
            <div>
                <div>
                    <FormControl fullWidth variant="outlined" margin="normal" color="secondary">
                        <InputLabel id="countryCodeLabel">Country Code</InputLabel>
                        <Select
                            label="Country Code"
                            labelId="countryCodeLabel"
                            value={countryCode}
                            onChange={handleCountryCodeChange}
                        >
                            <MenuItem value="91">India (+91)</MenuItem>
                            <MenuItem value="1">America (+1)</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <TextField
                        label="Phone Number"
                        variant="outlined"
                        margin="normal"
                        color="secondary"
                        fullWidth
                        required
                        type="tel"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                </div>
                <div>
                    <FormControlLabel
                        control={<Checkbox checked={acceptTermsAndCondition} onChange={handleAcceptTermsChange} />}
                        label="Accept Terms and Conditions"
                    />
                </div>
                <div>
                    <Button variant="contained" color="secondary" onClick={() => setStep(2)}>
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={!isFormValid}
                        onClick={() => {

                            handleSubmit(setStep(4));
                        }}
                    >
                        Submit
                    </Button>

                </div>
            </div>
        </div>
    );
};

export default ThirdStep;
