import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { configureStore } from '@reduxjs/toolkit';
import App from 'components/app/app';
import { createAPI } from 'services/api';
import { rootReducer } from 'store/root-reducer';

const api = createAPI();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Toaster position="top-right" />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
