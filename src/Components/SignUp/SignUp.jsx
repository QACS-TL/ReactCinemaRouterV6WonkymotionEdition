import React from 'react';

import ImageContainer from '../Content/ImageContainer';
import SignUpForm from './SignUpForm';

import { IMAGES } from '../../js/constants/images';

const SignUp = () => {
    return (
        <>
            <div className="container">
                <ImageContainer image={IMAGES.signup} width="100%" />
            </div>
            <SignUpForm />
        </>
    );
}

export default SignUp;