import styles from './styles.module.scss'

export type BottomProps = {
    name: string
}

export const Button = ({ name }: BottomProps) => {
    return <button className={styles.button}>{name}</button>
}
