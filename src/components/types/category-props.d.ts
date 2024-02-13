import categories from '@/repository/categories'

type CategoryProps = (typeof categories)[0]

type CategoryStateProps = {
  category: typeof categories
}

type CategoryType = {
  id: string
  name: string
  thumbnail: string
  header: string
  description: string
}

export type { CategoryProps, CategoryStateProps, CategoryType }
