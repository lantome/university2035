import { configureStore } from '@reduxjs/toolkit';
import { newsReducer } from './reducer';

export const setupStore = () => {
	return configureStore({
		reducer: newsReducer
	})
}
