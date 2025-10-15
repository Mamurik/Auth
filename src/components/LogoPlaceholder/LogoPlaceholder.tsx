import { CompanyText, Wrapper } from './LogoPlaceholder.styled'

interface LogoPlaceholderProps {
	logoSrc: string
	companyName?: string
}

const LogoPlaceholder = ({
	logoSrc,
	companyName = 'Company',
}: LogoPlaceholderProps) => {
	return (
		<Wrapper>
			<img src={logoSrc} alt='logo' />
			<CompanyText>{companyName}</CompanyText>
		</Wrapper>
	)
}

export default LogoPlaceholder
