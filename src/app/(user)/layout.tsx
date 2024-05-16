import type { Metadata } from 'next';
import '../../styles/globals.css';
import Navbar from '@/components/Navbar';
import PageButton from '@/components/PageButton';
import Footer from '@/components/Footer';
import StoreProvider from '../../components/StoreProvider';
import { Toaster } from 'react-hot-toast';

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
				<StoreProvider>
					<Navbar />
					<PageButton />
					{children}
					<Toaster
						position="bottom-right"
						toastOptions={{
							style: {
								background: '#000',
								color: '#fff',
							},
						}}
					/>
					<Footer />
				</StoreProvider>
			</body>
		</html>
	);
}
