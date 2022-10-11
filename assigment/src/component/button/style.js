import styled from 'styled-components';

export const PrimaryBtn = styled.button`
	background: #ffb91e;
	border-radius: 5px;
	font-family: 'faktumMedium';
	font-size: 17px;
	line-height: 21px;
	text-align: center;
	text-transform: capitalize;
	color: #232120;
	padding: 16px 30px;
    margin:4px;
	border: none;
	outline: none;
	cursor: pointer;
    width:100%;
	&.halfBtn {
		min-width: 49%;
	}
	&.inviteBtn {
		width: 200px !important;
		@media (max-width: 600px) {
			width: 100% !important;
		}
	}
	&:disabled {
		background: #f6ede2;
		cursor: default;
	}
	@media (max-width: 600px) {
		padding: 16px 6px;
	}
`;