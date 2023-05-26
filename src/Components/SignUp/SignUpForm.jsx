import React, { useState } from 'react';

import TitleOption from './TitleOption';
import FreeTextInput from './FreeTextInput';
import RadioButtons from './RadioButtons';
import SubmitButton from './SubmitButton';
import { POSTSIGNUP } from '../../js/constants/urls';

const SignUpForm = () => {
    const [title, setTitle] = useState({ value: ``, valid: false, touched: false });
    const [firstName, setFirstName] = useState({ value: ``, valid: false, touched: false });
    const [lastName, setLastName] = useState({ value: ``, valid: false, touched: false });
    const [email, setEmail] = useState({ value: ``, valid: false, touched: false });
    const [phoneNumber, setPhoneNumber] = useState({ value: ``, valid: true, touched: false });
    const [dob, setDob] = useState(``);
    const [gender, setGender] = useState(``);

    // The following functions are validation functions, they
    // need to be declared before they are used in the handler
    // function handleChange below
    const validateString = (name, input) => {
        const result = /^([A-Za-z'-]{2,})$/.test(input);
        switch(name) {
            case `firstName`:
                result ? setFirstName({value: input, valid: true, touched: true}) : setFirstName({value: input, valid:false, touched: true});
                break;
            case `lastName`:
                result ? setLastName({value: input, valid: true, touched: true}) : setLastName({value: input, valid:false, touched: true});
                break;
            default:
                break;
        }
    }

    const validateEmail = input => {
        const result = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(input);
        result ? setEmail({value: input, valid: true, touched: true}) : setEmail({value: input, valid:false, touched: true});
    }

    const validatePhoneNumber = input => {
        let result;
        if(input) {
            result = /^((\(?0\d{4}\)?\s?\d{3}\s?\d{3})|(\(?0\d{3}\)?\s?\d{3}\s?\d{4})|(\(?0\d{2}\)?\s?\d{4}\s?\d{4}))(\s?#(\d{4}|\d{3}))?$/.test(input);
            result ? setPhoneNumber({value: input, valid: true, touched: true}) : setPhoneNumber({value: input, valid:false, touched: true});
        } else {
            setPhoneNumber({value: input, valid: true, touched: true});
        }
    }

    const sendData = async person => {
        const response = await fetch(
            POSTSIGNUP,
            {
                method: `POST`,
                mode: `cors`,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(person)
            }
        );
        if (!response.ok || !(response.status === 200 || response.status === 201)) {
            console.log(response.status)
            alert(`There was an error sending the data`);
        } else {
            alert(`Data sent successfully`);
        }
    };

    // The following function looks at which field has raised
    // the change event and updates the value in state if it 
    // all of the validation that is require of it

    const handleChange = event => {
        switch(event.target.type) {
            case `text`:
                validateString(event.target.name, event.target.value);
                break;
            case `email`:
                validateEmail(event.target.value);
                break;
            case `tel`:
                validatePhoneNumber(event.target.value);
                break;
            default:
                break;
        }
        switch(event.target.name) {
            case `title`:
                setTitle({value: event.target.value, valid: true});
                break;
            case `dob`:
                const dobForSubmit = new Date(event.target.value).toISOString();
                setDob(dobForSubmit);
                break;
            case `gender`:
                setGender(event.target.value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (title.valid && firstName.valid && lastName.valid && email.valid && (phoneNumber.valid || phoneNumber.value === ``)) {
            const person = {
                title: title.value,
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                phoneNumber: phoneNumber.value,
                dob,
                gender
            };
            sendData(person);
        } else {
            alert(`There is invalid data`);
        }

    };

    let submitStatus = (title.valid && firstName.valid && lastName.valid && email.valid);

    return (
        <div className="container">
            <form noValidate className="needs-validation">
                <TitleOption onchange={handleChange} />
                <FreeTextInput 
                    fieldName="firstName" type="text" 
                    onchange={handleChange} 
                    value={firstName} fieldDisplay="First Name" required={true}
                    errorMsg="Please enter your first name (at least 2 characters)"
                />
                <FreeTextInput 
                    fieldName="lastName" 
                    type="text" 
                    onchange={handleChange} 
                    value={lastName} fieldDisplay="Last Name" required={true} 
                    errorMsg="Please enter your last name (at least 2 characters)"
                />
                <FreeTextInput 
                    fieldName="email" 
                    type="email" 
                    onchange={handleChange} 
                    value={email} fieldDisplay="Email" 
                    required={true}
                    errorMsg="Please enter a valid email address" 
                />
                <FreeTextInput
                    fieldName="phoneNumber" type="tel" 
                    onchange={handleChange} 
                    value={phoneNumber} fieldDisplay="Phone Number" required={false}
                    errorMsg="If you are providing a phone number it must contain exactly 11 digits"
                />
                <FreeTextInput 
                    fieldName="dob" 
                    type="date" 
                    onchange={handleChange} 
                    value={dob} 
                    fieldDisplay="Date of Birth" required={false} 
                />
                <RadioButtons 
                    onchange={handleChange} 
                    value={gender} 
                />
                <SubmitButton 
                    handleSubmit={handleSubmit} status={submitStatus} 
                />
            </form>
        </div>
    );
}

export default SignUpForm;