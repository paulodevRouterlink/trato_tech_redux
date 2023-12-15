import { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  props: { label: string }
}

export const Button = ({ props, ...rest }: ButtonProps) => (
  <button {...rest} className={styles.button}>
    {props.label}
  </button>
)
