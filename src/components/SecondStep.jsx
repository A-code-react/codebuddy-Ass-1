import { useState, useContext } from 'react';
import { Button, TextField } from '@mui/material';
import { multiStepContext } from '../StepContext';

const SecondStep = () => {
    const { setStep, userData, setUserData } = useContext(multiStepContext);

    const [firstName, setFirstName] = useState(userData.firstName || '');
    const [lastName, setLastName] = useState(userData.lastName || '');
    const [address, setAddress] = useState(userData.address || '');

    const isFirstNameValid = /^[a-zA-Z]{2,50}$/.test(firstName);
    const isLastNameValid = lastName === '' || /^[a-zA-Z]+$/.test(lastName);
    const isAddressValid = address.length >= 1 && address.length <= 20 && address;

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
        setUserData({ ...userData, firstName: event.target.value });
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
        setUserData({ ...userData, lastName: event.target.value });
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
        setUserData({ ...userData, address: event.target.value });
    };

    const isFormValid = isFirstNameValid && isLastNameValid && isAddressValid;

    return (
        <div>
            <div>
                <div>
                    <TextField
                        label="First Name"
                        variant="outlined"
                        margin="normal"
                        color="secondary"
                        fullWidth
                        required
                        value={firstName}
                        onChange={handleFirstNameChange}
                        error={!isFirstNameValid}
                        helperText={!isFirstNameValid && 'Invalid format. Alphabets only, 2 to 50 characters.'}
                    />
                </div>
                <div>
                    <TextField
                        label="Last Name"
                        variant="outlined"
                        margin="normal"
                        color="secondary"
                        fullWidth
                        value={lastName}
                        onChange={handleLastNameChange}
                        error={!isLastNameValid}
                        helperText={!isLastNameValid && 'Invalid format. Alphabets only.'}
                    />
                </div>
                <div>
                    <TextField
                        label="Address"
                        variant="outlined"
                        margin="normal"
                        color="secondary"
                        fullWidth
                        required
                        value={address}
                        onChange={handleAddressChange}
                        error={!isAddressValid}
                        helperText={!isAddressValid && 'Minimum length of 10 characters required.'}
                    />
                </div>
                <div>
                    <Button variant="contained" color="secondary" onClick={() => setStep(1)}>
                        Back
                    </Button>
                    <Button variant="contained" color="primary" disabled={!isFormValid} onClick={() => setStep(3)}>
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SecondStep;
