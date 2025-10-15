import styled from 'styled-components'

export const AuthWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background: #f5f5f5;
`

export const AuthForm = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 32px;
	background: #ffffff;
	border-radius: 6px;
`

export const LogoAndTitle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 12px;
`

export const SignInText = styled.h2`
	text-align: center;
	font-style: normal;
	font-weight: 600;
	font-size: 30px;
	margin: 0;
	line-height: 32px;
	max-width: 376px;
	padding: 24px 30px;
`

export const UserInputs = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	gap: 16px;
`
