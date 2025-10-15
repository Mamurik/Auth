import { useRef, useState } from 'react'
import arrIcon from '../../../public/Arr.svg'
import symbolIcon from '../../../public/Symbol.svg'
import LogoPlaceholder from '../LogoPlaceholder/LogoPlaceholder'
import {
	AuthBox,
	BackButton,
	CodeInput,
	CodeInputs,
	ErrorText,
	LogoAndTitle,
	SubmitButton,
	Subtitle,
	Title,
	Wrapper,
} from './TwoFactorAuth.styled'

const TwoFactorAuth = ({ onBack }: { onBack: () => void }) => {
	const [code, setCode] = useState(Array(6).fill(''))
	const [error, setError] = useState('')
	const inputRefs = useRef<HTMLInputElement[]>([])

	const handleChange = (value: string, index: number) => {
		if (!/^[0-9]?$/.test(value)) return
		const newCode = [...code]
		newCode[index] = value
		setCode(newCode)
		setError('')

		if (value && index < 5) inputRefs.current[index + 1]?.focus()
	}

	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLInputElement>,
		index: number
	) => {
		if (e.key === 'Backspace' && !code[index] && index > 0) {
			inputRefs.current[index - 1]?.focus()
		}
	}

	const handleSubmit = () => {
		const enteredCode = code.join('')
		if (enteredCode === '111111') {
			setError('Invalid code')
		} else {
			console.log('✅ Submitted code:', enteredCode)
			setError('')
		}
	}

	return (
		<Wrapper>
			<AuthBox>
				<BackButton src={arrIcon} alt='back' onClick={onBack} />

				<LogoAndTitle>
					<LogoPlaceholder logoSrc={symbolIcon} />
				</LogoAndTitle>

				<Title>Two-Factor Authentication</Title>
				<Subtitle>
					Enter the 6-digit code from the Google Authenticator app
				</Subtitle>

				<CodeInputs>
					{code.map((digit, i) => (
						<CodeInput
							key={i}
							type='text'
							maxLength={1}
							value={digit}
							onChange={e => handleChange(e.target.value, i)}
							onKeyDown={e => handleKeyDown(e, i)}
							ref={el => {
								inputRefs.current[i] = el!
							}}
							$isError={!!error}
						/>
					))}
				</CodeInputs>

				{error && <ErrorText>{error}</ErrorText>}

				<SubmitButton
					onClick={handleSubmit}
					disabled={code.some(digit => !digit)}
				>
					Verify
				</SubmitButton>
			</AuthBox>
		</Wrapper>
	)
}

export default TwoFactorAuth
