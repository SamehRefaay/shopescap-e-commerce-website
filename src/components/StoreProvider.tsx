'use client';
import { Provider } from 'react-redux';
import { persistor, store } from '@/lib/store';
import { PersistGate } from 'redux-persist/integration/react';
import { SessionProvider } from 'next-auth/react';

export default function StoreProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<SessionProvider>{children}</SessionProvider>
			</PersistGate>
		</Provider>
	);
}
