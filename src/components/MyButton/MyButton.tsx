import type { FC } from 'react'
import { MyButtonStyled } from './MyButton.styled'

interface MyButtonProps {
	onClick?: () => void
	children?: React.ReactNode
	disabled?: boolean
}

const MyButton: FC<MyButtonProps> = ({ onClick, children, disabled }) => {
	return (
		<MyButtonStyled onClick={onClick} disabled={disabled}>
			{children || 'Log In'}
		</MyButtonStyled>
	)
}

export default MyButton
