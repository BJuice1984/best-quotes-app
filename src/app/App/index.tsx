import Title from '@src/entities/title'
import styles from './styles.module.scss'
import '../styles/index.scss'

const title = 'best-quotes-app'

function App() {
    return (
        <div className={styles.page}>
            <div className={styles.page__container}>
                <div>
                    <Title text={title} />
                    <img src='images/444443.jpg' alt='Картинка. Наброски Пикассо' />
                </div>
            </div>
        </div>
    )
}

export default App
