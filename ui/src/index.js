import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './pages/AuthProvider';

// </React.StrictMode>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
<BrowserRouter>
    <App/>
    </BrowserRouter>
  </AuthProvider>
    
   
   
)
