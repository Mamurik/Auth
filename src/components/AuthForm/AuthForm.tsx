import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import type { LoginResponse } from '../../api/mockAuth'
import { mockLogin } from '../../api/mockAuth'
import LogoPlaceholder from '../LogoPlaceholder/LogoPlaceholder'
import MyButton from '../MyButton/MyButton'
import MyInput from '../MyInput/MyInput'
import TwoFactorAuth from '../TwoFactorAuth/TwoFactorAuth'
import {
	AuthWrapper,
	LogoAndTitle,
	SignInText,
	AuthForm as StyledAuthForm,
	UserInputs,
} from './AuthForm.styled'

const AuthForm = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [is2FA, setIs2FA] = useState(false)
	const [serverError, setServerError] = useState('')

	const mutation = useMutation({
		mutationFn: (): Promise<LoginResponse> => mockLogin(email, password),
		onSuccess: data => {
			if (!data.success) setServerError(data.error)
			else if (data.require2FA) setIs2FA(true)
			else alert('Login success')
		},
		onError: (err: Error) => setServerError(err.message || 'Unknown error'),
	})

	const handleLogin = () => {
		setServerError('')
		mutation.mutate()
	}

	const handleBack = () => {
		setIs2FA(false)
		setServerError('')
	}

	if (is2FA) return <TwoFactorAuth onBack={handleBack} />

	const isDisabled =
		!email.trim() || !password.trim() || mutation.status === 'pending'

	return (
		<AuthWrapper>
			<StyledAuthForm>
				<LogoAndTitle>
					<LogoPlaceholder logoSrc='Symbol.svg' />
					<SignInText>Sign in to your account to continue</SignInText>
				</LogoAndTitle>

				<UserInputs>
					<MyInput
						image='UserOutlined.svg'
						placeholder='Email'
						type='text'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<MyInput
						image='LockOutlined.svg'
						placeholder='Password'
						type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</UserInputs>

				{serverError && (
					<p style={{ color: 'red', textAlign: 'center', marginTop: 8 }}>
						{serverError}
					</p>
				)}

				<MyButton disabled={isDisabled} onClick={handleLogin}>
					{mutation.status === 'pending' ? 'Logging in...' : 'Log In'}
				</MyButton>
			</StyledAuthForm>
		</AuthWrapper>
	)
}

export default AuthForm
