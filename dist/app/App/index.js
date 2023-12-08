import { jsx as _jsx } from "react/jsx-runtime";
import Title from '@src/entities/title';
import styles from './styles.module.scss';
import '../styles/index.scss';
const title = 'best-quotes-app';
function App() {
    return (_jsx("div", { className: styles.page, children: _jsx("div", { className: styles.page__container, children: _jsx("div", { children: _jsx(Title, { text: title }) }) }) }));
}
export default App;
//# sourceMappingURL=index.js.map