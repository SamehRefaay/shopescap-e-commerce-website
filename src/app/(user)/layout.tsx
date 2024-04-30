import type { Metadata } from 'next';
import '../../styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
	title: 'ShopeScape shop store || Best place to shop',
	description: 'Your trusted online shopping store',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
