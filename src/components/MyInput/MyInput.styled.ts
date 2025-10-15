import styled from 'styled-components'

export const MyInputWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 40px;
	box-sizing: border-box;
	background: #ffffff;
	border: 1px solid #d9d9d9;
	border-radius: 8px;
	transition: border 0.3s, box-shadow 0.3s;

	&:focus-within {
		border: 1px solid #1677ff;
		box-shadow: 0px 0px 0px 2px rgba(5, 145, 255, 0.1);
	}
`

export const MyInputStyled = styled.input`
	border: none;
	width: 100%;
	border-radius: 8px;
	height: 33px;
	outline: none;
	font-family: 'SF Pro Text', sans-serif;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	opacity: 0.75;

	&:focus {
		border: none;
		outline: none;
	}
`

export const MyInputImage = styled.img`
	margin: 0px 4px 0px 11px;
`
