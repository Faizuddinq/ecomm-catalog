import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import './index.css';

// Initialize dark mode on mount
// const savedTheme = localStorage.getItem('theme');
// const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
// if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
//   document.documentElement.classList.add('dark');
// } else {
//   document.documentElement.classList.remove('dark');
// }

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);