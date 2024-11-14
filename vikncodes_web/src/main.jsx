import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './context/AuthProvider.jsx';
import axios from 'axios'

axios.interceptors.request.use((request) => {
  const accessToken = localStorage.getItem('accessToken');

  if (accessToken) {
    request.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return request

}, (error) => {
  return Promise.reject(error);
});

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <BrowserRouter>
  <AuthProvider> 
    <App />
   </AuthProvider>
    </BrowserRouter>
    </QueryClientProvider>
)
