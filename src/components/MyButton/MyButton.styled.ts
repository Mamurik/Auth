import styled from 'styled-components'

interface ButtonProps {
	disabled?: boolean
}

export const MyButtonStyled = styled.button<ButtonProps>`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0px 15px;
	width: 100%;
	margin-top: 16px;
	height: 40px;
	border: 1px solid #d9d9d9;
	border-radius: 8px;
	background-color: ${({ disabled }) => (disabled ? '#bfbfbf' : '#1677ff')};
	color: #ffffff;
	font-size: 16px;
	font-weight: 500;
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	transition: background 0.3s ease, transform 0.1s ease;

	&:hover {
		background-color: ${({ disabled }) => (disabled ? '#bfbfbf' : '#4096ff')};
	}

	&:active {
		transform: ${({ disabled }) => (disabled ? 'none' : 'scale(0.98)')};
	}
`
