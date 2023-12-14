import CATEGORIES from '@/data/[categories]'

type CategoryProps = (typeof CATEGORIES)[0]

type CategoryStateProps = {
  category: typeof CATEGORIES
}

export type { CategoryProps, CategoryStateProps }
