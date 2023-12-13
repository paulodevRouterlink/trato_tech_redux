import { Header } from '@/components/Header'

export const Cart = () => {
  return (
    <div>
      <Header
        props={{
          title: 'Carrinho de compras',
          description: 'Confira produtos que você adicionou ao carrinho.',
        }}
      />

      <h1>Cart</h1>
    </div>
  )
}
