import ITEMS from '@/data/[items]'

type ItemProps = {
  title: string
  description: string
  photoUrl: string
  favorite: boolean
  price: number
  id: number
  category: string
}

type ItemType = (typeof ITEMS)[0]

export type { ItemProps }
