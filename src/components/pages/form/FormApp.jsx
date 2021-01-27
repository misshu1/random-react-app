import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { TextField } from '@material-ui/core';

import { asyncLocalStorage, ROUTES } from 'components/common';
import { Form } from 'components/pages/form/style';
import { PrimaryButton } from 'components/common/Buttons';
import { useUserDataContext } from 'contexts';

const validationSchema = yup.object().shape({
    email: yup.string().email('Invalid email!').required('Email is required!'),
    year: yup
        .number()
        .integer()
        .min(1800)
        .max(new Date().getFullYear())
        .required('Year is required!'),
});

export function FormApp() {
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const { updateUserData } = useUserDataContext();
    const navigate = useNavigate();
    const {
        errors,
        touched,
        isValid,
        values,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
            email: '',
            year: '',
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            handleFormSubmit(values, resetForm);
        },
    });

    useEffect(() => {
        asyncLocalStorage
            .getItem('is_logged_in')
            .then((data) =>
                data ? setIsLoggedIn(JSON.parse(data)) : setIsLoggedIn(false)
            );
    }, []);

    const handleFormSubmit = async (values, resetForm) => {
        let newData = [];
        await asyncLocalStorage.getItem('data').then((data) => {
            newData = data ? [...JSON.parse(data), values] : [values];
        });
        await asyncLocalStorage.setItem('data', JSON.stringify(newData));
        updateUserData(newData);
        resetForm();
        navigate(ROUTES.ROOT);
    };

    if (typeof isLoggedIn !== 'boolean') {
        return null;
    }

    // If not logged in redirect user to login page
    if (!isLoggedIn) {
        return <Navigate to={ROUTES.LOGIN} />;
    }

    return (
        <Form
            autoComplete='off'
            onSubmit={handleSubmit}
            errors={errors}
            touched={touched}
        >
            <TextField
                label='Email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                name='email'
                type='email'
                id='email'
                placeholder='john_doe@gmail.com'
                required
                error={!!errors.email}
                helperText={touched.email && errors.email}
                margin='normal'
            />

            <TextField
                label='Birth Year'
                name='year'
                value={values.year}
                onChange={handleChange}
                onBlur={handleBlur}
                id='year'
                placeholder='1995'
                type='number'
                min='1800'
                max={new Date().getFullYear()}
                step='1'
                required
                error={!!errors.year}
                helperText={touched.year && errors.year}
                margin='normal'
            />

            <PrimaryButton
                type='submit'
                aria-label='send data'
                disabled={!isValid}
                style={{ marginTop: '1.5rem' }}
            >
                Submit
            </PrimaryButton>
        </Form>
    );
}
