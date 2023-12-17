import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routs/Router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async'


const queryClient=new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <QueryClientProvider client={queryClient}>
    <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={Router}></RouterProvider>
        <Toaster/>
    </AuthProvider>
    </HelmetProvider>
   </QueryClientProvider>
    
  </React.StrictMode>,
)
