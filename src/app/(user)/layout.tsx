import type { Metadata } from 'next';
import '../../styles/globals.css';
import Navbar from '@/components/Navbar';
import PageButton from '@/components/PageButton';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
	title: 'ShopeScape | Best place to shop',
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
				<PageButton />
				{children}
				<Footer />
			</body>
		</html>
	);
}
