type CategoryProps = {
  id: string
  name: string
  description: string
  thumbnail: string
  header: string
}

type CategoryListProps = {
  categories: CategoryProps[]
}

export type {CategoryProps, CategoryListProps}