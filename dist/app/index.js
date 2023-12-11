import { jsx as _jsx } from "react/jsx-runtime";
import 'react-hot-loader';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import './styles/index.scss';
import { Provider } from 'react-redux';
import { store } from '@src/shared/config/store/store';
import Preloader from '@src/shared/ui/preloader';
const rootElement = document.getElementById('app');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(_jsx(React.StrictMode, { children: _jsx(Router, { children: _jsx(Provider, { store: store, children: _jsx(Suspense, { fallback: _jsx(Preloader, {}), children: _jsx(App, {}) }) }) }) }));
}
//# sourceMappingURL=index.js.map