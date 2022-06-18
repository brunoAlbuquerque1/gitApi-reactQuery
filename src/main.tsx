import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from '../src/pages/home'
import {QueryClient,QueryClientProvider} from 'react-query'
import GlobalStyled from "./GlobalStyled";
const queryClient  = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient} >
  <React.StrictMode>
  <GlobalStyled />
    <Home />
  </React.StrictMode>
  </QueryClientProvider>
)
