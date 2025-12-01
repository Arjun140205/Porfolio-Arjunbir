import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initPerformanceMonitoring } from './utils/performanceMonitor';

// Mark app start
if (window.performance && window.performance.mark) {
  window.performance.mark('app-start');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Mark app rendered
if (window.performance && window.performance.mark) {
  window.performance.mark('app-rendered');
}

// Initialize performance monitoring
initPerformanceMonitoring();
