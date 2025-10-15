export type LoginResponse =
	| { success: true; require2FA?: boolean }
	| { success: false; error: string }

export const mockLogin = async (
	email: string,
	password: string
): Promise<LoginResponse> => {
	await new Promise(resolve => setTimeout(resolve, 500))

	if (!email || !password)
		return { success: false, error: 'Email and password are required' }
	if (!email.includes('@'))
		return { success: false, error: 'Invalid email format' }

	return { success: true, require2FA: true }
}
