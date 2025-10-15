import type { ChangeEvent, FC } from 'react'
import { MyInputImage, MyInputStyled, MyInputWrapper } from './MyInput.styled'

interface MyInputProps {
	placeholder: string
	image: string
	type: string
	value: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const MyInput: FC<MyInputProps> = ({
	image,
	placeholder,
	type,
	value,
	onChange,
}) => {
	return (
		<MyInputWrapper>
			<MyInputImage src={image} alt={image} />
			<MyInputStyled
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</MyInputWrapper>
	)
}

export default MyInput
