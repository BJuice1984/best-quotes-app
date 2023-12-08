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
                </div>
            </div>
        </div>
    )
}

export default App
