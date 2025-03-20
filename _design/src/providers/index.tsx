import { GlobalContextProvider } from '@/context/GlobalContext';
import { ThemeProvider } from 'next-themes';
import React from 'react';

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<GlobalContextProvider>
			<ThemeProvider attribute='class'>{children}</ThemeProvider>
		</GlobalContextProvider>
	);
}
