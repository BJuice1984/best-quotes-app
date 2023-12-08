import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Title from '@src/entities/title';
import styles from './styles.module.scss';
import '../styles/index.scss';
const title = 'best-quotes-app';
function App() {
    return (_jsx("div", { className: styles.page, children: _jsx("div", { className: styles.page__container, children: _jsxs("div", { children: [_jsx(Title, { text: title }), _jsx("img", { src: 'images/444443.jpg', alt: '\u041A\u0430\u0440\u0442\u0438\u043D\u043A\u0430. \u041D\u0430\u0431\u0440\u043E\u0441\u043A\u0438 \u041F\u0438\u043A\u0430\u0441\u0441\u043E' })] }) }) }));
}
export default App;
//# sourceMappingURL=index.js.map