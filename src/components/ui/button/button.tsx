import { ComponentProps } from 'react'
import styles from './button.module.scss'

type ButtonProps = ComponentProps<'button'> & {
  text: string
}

export const Button = ({ text, ...rest }: ButtonProps) => (
  <button {...rest} className={styles.button}>
    {text}
  </button>
)
