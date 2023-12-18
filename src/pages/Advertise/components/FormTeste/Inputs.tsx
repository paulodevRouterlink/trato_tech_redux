import { InputHTMLAttributes, SelectHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error: string | undefined
}
type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: {
    value: string
    label: string
  }[]
}

const InputStyle = {
  background: '#daf1ff',
  padding: '1rem 1.45rem',
  border: '2px solid transparent',
  borderRadius: ' .3rem',
  width: '100%',
}

const InputStyleError = {
  ...InputStyle,
  borderColor: 'red',
}

const SpanStyle = {
  color: 'red',
}

export const Input = ({ error, ...props }: InputProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <input {...props} style={error ? InputStyleError : InputStyle} />
      {error && <span style={SpanStyle}>{error}</span>}
    </div>
  )
}

export const Select = ({ options, ...props }: SelectProps) => (
  <select {...props}>
    {options.map(option => (
      <option key={option.label} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
)
