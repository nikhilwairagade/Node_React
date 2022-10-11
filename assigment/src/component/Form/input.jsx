import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import { ErrorMessage,Field } from 'formik';


export const StyledTextField = styled(TextField)`
width: 100%;
margin-top: 24px !important;
&.mt-0 { margin-top: 0 !important }

	&.errorBordered .MuiInput-underline::before { border-bottom: 1px solid red !important; }
	.MuiInputAdornment-positionStart, .MuiInputAdornment-positionEnd {
		&:empty { margin: 0 }
	}
	div {
		&:hover {
			border-bottom: none !important;
		}
		&:before {
			border-bottom: none !important;
		}
	}

	/*
	input[type='number'] {
		-moz-appearance: textfield;
	}
	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none;
	}
	*/

input {
  font-size: 16px;
  font-family: faktumRegular;
  line-height: 21px;
  color: #232120;
  padding: 10px 0 10px 0;
  border-bottom: 1px solid transparent;

		&:focus {
			border-bottom: 1px solid #ffb91e !important;
		}
		&:before {
			border-bottom: 1px solid #ffb91e !important;
		}
	}
	
	.MuiInput-underline:after {
		border-bottom: none;
	}
	.MuiInput-underline:before {
		border-bottom: 1px solid #ffb91e !important;
	}
	.Mui-error:after {
		border-bottom: 1px solid #eb5757;
	}
	.MuiInputAdornment-root {
		color: #bdbdbd;
		letter-spacing: -0.337647px;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 21px;
	}

	label {
		font-size: 14px;
		line-height: 16px;
		color: #4e4e4e !important;
		font-family: faktumMedium;
		transform: none;
	}
	.MuiInputBase-multiline {
		padding: 0px !important;
	}
	textarea {
		border-bottom: 1px solid #ffb91e;
		font-size: 16px;
		font-family: faktumRegular;
		line-height: 21px;
		color: #232120;
		padding: 10px 0 10px 0;


		&:focus {
			border-bottom: 1px solid #ffb91e !important;
		}
		&:before {
			border-bottom: 1px solid #ffb91e !important;
		}
	}
`;

export const Input = ({
	label,
	id,
	value,
	name = "name",
	placeholder,
	type = 'text',
	mtZero = false,
	noBg = false,
}) => {
		return (
			<>
                <Field
                    InputLabelProps={{
                        shrink: true,
                    }}
                    fullWidth
                    label={label}
                    name={name}
                    id={id}
                    value={value}
                    placeholder={placeholder}
                    type={type}
                    as={StyledTextField}
                    className={`${mtZero ? 'mt-0' : ''} ${noBg ? 'noBg' : ''}`}
                />
					<ErrorMessage name={name || ''} className="error" component="div" />
				</>
		)};