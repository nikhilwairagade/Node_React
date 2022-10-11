import React from "react";
import { PrimaryBtn } from "./style";
import CircularProgress from '@material-ui/core/CircularProgress';

export const PrimaryButton = ({
	text,
	className,
	disabled,
	isLoading = false,
	type = 'submit',
	id,
	title = '',
    onClick
}) => {
	return (
		<PrimaryBtn
			type={type}
			id={id}
			disabled={disabled || isLoading}
			title={title}
            onClick={onClick}
		>
			{isLoading && (
				<CircularProgress
					size={18}
					style={{ marginRight: '10px', marginBottom: '-4px' }}
					color="inherit"
					thickness={5}
				/>
			)}
            {text}
		</PrimaryBtn>
	);
};