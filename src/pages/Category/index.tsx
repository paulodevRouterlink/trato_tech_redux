import { useParams } from 'react-router-dom'

export const Category = () => {
  const params = useParams()

  return (
    <div style={{ background: 'blue' }}>
      <h1>Category - {params.id}</h1>
    </div>
  )
}
