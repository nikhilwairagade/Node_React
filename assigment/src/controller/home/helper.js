import * as Yup from 'yup';

export const validate = Yup.object().shape({
	name: Yup.string()
		.matches(
			/^[a-zA-Z\u00C0-\u00FF!@#$%^&*-_’',.]+(?:\s[a-zA-Z\u00C0-\u00FF!@#$%^&*-_’',.]+)+$/,
			'Please enter your full name'
		)
		.required('Please enter your full name'),
	email: Yup.string().email('Email is invalid').required('Please enter a valid email address'),
    password: Yup.string().min(5).max(50).required(''),
    confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords do not match')    
});

export const validateSignin = Yup.object().shape({
	email: Yup.string().email('Email is invalid').required('Please enter a valid email address'),
    password: Yup.string().min(5).max(50).required('')
});