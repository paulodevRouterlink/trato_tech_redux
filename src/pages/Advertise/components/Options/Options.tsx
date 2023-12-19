type OptionsProps = {
  label: string
  options: {
    id: string
    name: string
  }[]
}

export const Options = ({ label, options }: OptionsProps) => (
  <>
    <option value="">{label}</option>
    {options.map(props => (
      <option key={props.id} value={props.id}>
        {props.name}
      </option>
    ))}
  </>
)
