import { useParams } from 'react-router-dom'
import { Header } from '@/components/Header'
import { TitleWithImage } from '@/components/Header/TitleWithImage'
import { useCategories } from '@/hooks/useCategories'

export const Category = () => {
  const params = useParams()
  const { CATEGORIES } = useCategories()
  const category = CATEGORIES.find(props => props.id === params.id)

  const CategoryHead = {
    title: category!.name,
    description: category!.description,
    image: category!.header,
  }

  return (
    <div>
      <Header props={CategoryHead}>
        <TitleWithImage props={CategoryHead} />
      </Header>

      <h1>Category - {params.id}</h1>
    </div>
  )
}
