'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	// Prevents hydration mismatch
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className='p-2 rounded-full bg-gray-50  w-10 h-10 transition-all hover:bg-blue hover:text-white cursor-pointer dark:bg-transparent dark:hover:bg-blue'
		>
			{theme === 'dark' ? <Moon /> : <Sun />}
		</div>
	);
}
