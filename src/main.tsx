import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import RouterApp from './Routes/RouterApp.tsx'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.tsx'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterApp />
      </PersistGate>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
