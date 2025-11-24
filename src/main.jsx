import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import i18n from './locals/il8n.js';
import { I18nextProvider } from 'react-i18next';
if (import.meta.env.MODE == 'production') {
  console.log = () => {};
}

const setHeight = () => {
  const curr = window.innerHeight;
  document.body.style.height = `${curr}px`;
};
window.addEventListener('resize', setHeight);
setHeight();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </StrictMode>,
);
