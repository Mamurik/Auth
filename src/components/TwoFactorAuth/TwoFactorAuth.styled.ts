import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background: #f5f5f5;
`

export const AuthBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #fff;
	padding: 32px;
	border-radius: 8px;
	width: 400px;
	position: relative;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`

export const BackButton = styled.img`
	position: absolute;
	top: 20px;
	left: 20px;
	width: 24px;
	height: 24px;
	cursor: pointer;
`

export const LogoAndTitle = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-bottom: 12px;
`

export const Title = styled.h2`
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 8px;
	text-align: center;
`

export const Subtitle = styled.p`
	max-width: 376px;
	text-align: center;
	font-family: 'SF Pro Text';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: rgba(0, 0, 0, 0.88);
`

export const CodeInputs = styled.div`
	display: flex;
	justify-content: center;
	gap: 12px;
	margin-top: 8px;
`

export const ErrorText = styled.p`
	color: #ff4d4f;
	font-size: 14px;
	margin-top: 12px;
	margin-right: 276px;
	text-align: center;
`

export const CodeInput = styled.input<{ $isError?: boolean }>`
	width: 44px;
	height: 56px;
	text-align: center;
	font-size: 24px;
	border: 1px solid ${({ $isError }) => ($isError ? '#ff4d4f' : '#d9d9d9')};
	border-radius: 8px;
	outline: none;
	transition: border 0.3s, box-shadow 0.3s;

	&:focus {
		border-color: ${({ $isError }) => ($isError ? '#ff4d4f' : '#1677ff')};
		box-shadow: ${({ $isError }) =>
			$isError
				? '0 0 0 2px rgba(255, 77, 79, 0.15)'
				: '0 0 0 2px rgba(5, 145, 255, 0.1)'};
	}
`

export const SubmitButton = styled.button<{ disabled?: boolean }>`
	margin-top: 16px;
	width: 100%;
	height: 44px;
	background: ${({ disabled }) => (disabled ? '#d9d9d9' : '#1677ff')};
	color: white;
	border: none;
	border-radius: 8px;
	font-size: 16px;
	cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
	transition: background 0.3s ease;

	&:hover {
		background: ${({ disabled }) => (disabled ? '#d9d9d9' : '#4096ff')};
	}
`
