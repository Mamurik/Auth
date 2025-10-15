import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthForm from './components/AuthForm/AuthForm'
import './Style.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthForm />
		</QueryClientProvider>
	</React.StrictMode>
)
