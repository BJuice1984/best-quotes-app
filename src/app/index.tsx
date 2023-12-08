import 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter as Router } from 'react-router-dom'
import App from './App'
import './styles/index.scss'
import { Provider } from 'react-redux'
import { store } from '@src/shared/config/store/store'

const rootElement = document.getElementById('app')

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
        <React.StrictMode>
            <Router>
                <Provider store={store}>
                    <App />
                </Provider>
            </Router>
        </React.StrictMode>
    )
}
