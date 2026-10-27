import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/fonts.css';
import './styles/baseline.css';
import './styles/original.css';

createRoot(document.getElementById('root')).render(<App />);
