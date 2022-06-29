import React from 'react'

// components
import { CssBaseline } from '@mui/material';
import ReactDOM from 'react-dom/client'
import App from './components/App'

// redux
import store from './redux/store'

// styles
import './index.css'
import { Provider } from 'react-redux';

const container = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
container.render(
  <React.StrictMode>
		<Provider store={store}>
			<CssBaseline />
			<App />
		</Provider>
  </React.StrictMode>
)